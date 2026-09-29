/* ===== Campus Memory — AI layer =====
   If the user has saved their own Anthropic API key (Settings → AI), we call the real
   Claude API directly from the browser, grounded with a snapshot of their Campus Memory
   data. Otherwise (or if the call fails — e.g. no key, offline, CORS-blocked), we fall
   back to a deterministic local retrieval so the assistant still works with zero setup. */

const CM_API_KEY_STORAGE = "cm_api_key";

function cmGetApiKey() { return localStorage.getItem(CM_API_KEY_STORAGE) || ""; }
function cmSetApiKey(k) { if (k) localStorage.setItem(CM_API_KEY_STORAGE, k.trim()); else localStorage.removeItem(CM_API_KEY_STORAGE); }

function cmGroundingSnapshot() {
  const db = cmDB();
  const user = cmCurrentUser();
  const lines = [];
  lines.push(`Student: ${user ? user.name : "Unknown"} (${user ? user.roll || "" : ""})`);
  lines.push("\nASSIGNMENTS:");
  (db.assignments || []).forEach(a => lines.push(`- ${a.title} [${a.subject}] due ${a.deadline}, status ${a.status}, priority ${a.priority}/100`));
  lines.push("\nEXAMS:");
  (db.exams || []).forEach(e => lines.push(`- ${e.subject} ${e.type} on ${e.date} ${e.time} at ${e.room}`));
  lines.push("\nATTENDANCE (threshold " + db.attendance.threshold + "%):");
  (db.attendance.subjects || []).forEach(s => lines.push(`- ${s.id}: ${s.pct}%`));
  lines.push("\nRECENT TIMELINE EVENTS:");
  (db.timeline || []).slice(-12).forEach(t => lines.push(`- ${t.date} ${t.time} [${t.subject}] ${t.type}: ${t.title}`));
  lines.push("\nKNOWLEDGE BASE:");
  (db.knowledgeBase || []).forEach(k => lines.push(`- Q: ${k.q} | A: ${k.a} | trust: ${k.trust}`));
  return lines.join("\n");
}

/**
 * Ask Campus AI. Calls onAnswer(text, source) once resolved.
 * source is "live-api" or "local-memory".
 */
async function cmAskAI(question, onAnswer) {
  const key = cmGetApiKey();
  if (key) {
    try {
      const system = `You are Campus AI, the assistant inside Campus Memory for ABC Institute of Technology. ` +
        `Answer ONLY using the Campus Memory data snapshot below. If the answer isn't in the data, say ` +
        `"I couldn't find that information in Campus Memory." Be concise (under 120 words), and mention which ` +
        `item(s) your answer is grounded in.\n\n--- CAMPUS MEMORY SNAPSHOT ---\n${cmGroundingSnapshot()}`;
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": key,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 500,
          system,
          messages: [{ role: "user", content: question }],
        }),
      });
      if (!res.ok) throw new Error("API responded " + res.status);
      const data = await res.json();
      const text = (data.content || []).filter(b => b.type === "text").map(b => b.text).join("\n").trim();
      if (text) { onAnswer(text, "live-api"); return; }
      throw new Error("Empty response");
    } catch (err) {
      console.warn("Live AI call failed, falling back to local memory:", err.message);
      onAnswer(cmLocalAnswer(question) + `<br/><br/><span style="font-size:11px;color:var(--text-muted)">(Live API call failed — ${err.message}. Showing a locally-grounded answer instead.)</span>`, "local-memory-fallback");
      return;
    }
  }
  onAnswer(cmLocalAnswer(question), "local-memory");
}

function cmSourceChip(label) { return `<span class="badge badge-accent" style="margin:4px 6px 0 0;display:inline-flex">📎 ${label}</span>`; }

function cmLocalAnswer(q) {
  const db = cmDB();
  const ql = q.toLowerCase();
  const sub = id => (db.subjects || []).find(s => s.id === id) || { name: id };
  const fmt = iso => new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

  if (ql.includes("due this week") || ql.includes("prioritize") || ql.includes("this week")) {
    const upcoming = [...(db.assignments || [])].filter(a => a.status !== "submitted").sort((a, b) => b.priority - a.priority).slice(0, 3);
    if (!upcoming.length) return "You're all caught up — nothing urgent is pending in Campus Memory right now.";
    return `Here's what I'd prioritize, ranked by urgency:<br/><br/>` +
      upcoming.map((a, i) => `${i + 1}. <b>${a.title}</b> (${sub(a.subject).name}) — due ${fmt(a.deadline)}, priority ${a.priority}/100`).join("<br/>") +
      `<br/><br/>` + upcoming.map(a => cmSourceChip(a.title)).join("");
  }
  if (ql.includes("exam")) {
    const exams = [...(db.exams || [])].sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, 3);
    if (!exams.length) return "I couldn't find any upcoming exams in Campus Memory.";
    return `Your next exams:<br/><br/>` + exams.map(e => `• <b>${sub(e.subject).name}</b> ${e.type} — ${fmt(e.date)}, ${e.time}, ${e.room}`).join("<br/>") +
      `<br/><br/>` + exams.map(e => cmSourceChip(`${sub(e.subject).name} ${e.type}`)).join("");
  }
  if (ql.includes("attend")) {
    const rows = db.attendance.subjects || [];
    return `Your attendance (threshold ${db.attendance.threshold}%):<br/><br/>` + rows.map(s => `• ${sub(s.id).name}: <b>${s.pct}%</b>`).join("<br/>") +
      `<br/><br/>${cmSourceChip("Attendance records")}`;
  }
  if (ql.includes("miss") || ql.includes("yesterday") || ql.includes("absent")) {
    const items = (db.timeline || []).filter(t => t.date === "2026-08-07");
    if (!items.length) return "I couldn't find that information in Campus Memory.";
    return `On 7 August:<br/><br/>` + items.map(t => `• <b>${sub(t.subject).name}</b>: ${t.title}`).join("<br/>") +
      `<br/><br/>Tip: use "What did I miss?" for a full multi-day summary.<br/><br/>` + items.map(t => cmSourceChip(t.title)).join("");
  }
  if (ql.includes("document") || ql.includes("upload")) {
    const docs = (db.documents || []).slice(0, 4);
    if (!docs.length) return "I couldn't find that information in Campus Memory.";
    return `Recently uploaded documents:<br/><br/>` + docs.map(d => `• <b>${d.title}</b> — ${sub(d.subject).name}`).join("<br/>") +
      `<br/><br/>` + docs.map(d => cmSourceChip(d.title)).join("");
  }
  const kb = (db.knowledgeBase || []).find(k => ql.split(" ").some(w => w.length > 3 && k.q.toLowerCase().includes(w)));
  if (kb) return `${kb.a}<br/><br/>${cmSourceChip(kb.q)}`;

  return "I couldn't find that information in Campus Memory. Try asking about assignments, exams, attendance, or what you missed.";
}
