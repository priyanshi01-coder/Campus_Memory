/* ===== Campus Memory — App Shell ===== */

const CM_ICONS = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>',
  week: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22.5V4.5Z"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>',
  cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  radar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
  brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2a3.5 3.5 0 0 0-3.5 3.5V6a3 3 0 0 0-2 5.3 3.5 3.5 0 0 0 1.2 6A3.5 3.5 0 0 0 9 21a3.5 3.5 0 0 0 3.5-3.5v-11A3.5 3.5 0 0 0 9.5 2Z"/><path d="M14.5 2A3.5 3.5 0 0 1 18 5.5V6a3 3 0 0 1 2 5.3 3.5 3.5 0 0 1-1.2 6A3.5 3.5 0 0 1 15 21a3.5 3.5 0 0 1-3.5-3.5v-11A3.5 3.5 0 0 1 14.5 2Z"/></svg>',
  network: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="5" cy="6" r="2.5"/><circle cx="19" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M7 7.2 10.3 16M17 7.2 13.7 16M7.4 6h9.2"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4.5 5-6 8-6s6.5 1.5 8 6"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.5 1Z"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12M7 8l5-5 5 5"/><path d="M4 17v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/></svg>',
  logs: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12h11M9 18h11M9 6h11M4 6h.01M4 12h.01M4 18h.01"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/></svg>',
};

function cmIcon(name, cls) { return `<span class="${cls||''}" style="display:inline-flex">${CM_ICONS[name]||''}</span>`; }

const CM_NAV = {
  student: [
    { label: "Overview", items: [
      { icon: "home", label: "Dashboard", href: "/student/dashboard.html" },
      { icon: "week", label: "My Week", href: "/student/week.html" },
      { icon: "clock", label: "Timeline", href: "/student/timeline.html" },
    ]},
    { label: "Academics", items: [
      { icon: "layers", label: "Subjects", href: "/student/subjects.html" },
      { icon: "file", label: "Assignments", href: "/student/assignments.html" },
      { icon: "cal", label: "Exams", href: "/student/exams.html" },
      { icon: "check", label: "Attendance", href: "/student/attendance.html" },
    ]},
    { label: "Memory", items: [
      { icon: "search", label: "What Did I Miss?", href: "/student/what-did-i-miss.html" },
      { icon: "brain", label: "Class Memory", href: "/student/class-memory.html" },
      { icon: "book", label: "Knowledge Base", href: "/student/knowledge-base.html" },
      { icon: "network", label: "Memory Graph", href: "/student/memory-graph.html" },
    ]},
    { label: "Intelligence", items: [
      { icon: "radar", label: "Academic Risk Radar", href: "/student/risk-radar.html" },
      { icon: "brain", label: "Campus AI", href: "/student/ai-assistant.html" },
    ]},
    { label: "Personal", items: [
      { icon: "chart", label: "Academic History", href: "/student/history.html" },
      { icon: "bell", label: "Notifications", href: "/student/notifications.html" },
      { icon: "user", label: "Profile", href: "/student/profile.html" },
    ]},
  ],
  faculty: [
    { label: "Overview", items: [
      { icon: "home", label: "Dashboard", href: "/faculty/dashboard.html" },
    ]},
    { label: "Teaching", items: [
      { icon: "layers", label: "My Classes", href: "/faculty/classes.html" },
      { icon: "file", label: "Assignments", href: "/faculty/assignments.html" },
      { icon: "cal", label: "Exams", href: "/faculty/exams.html" },
      { icon: "check", label: "Attendance", href: "/faculty/attendance.html" },
    ]},
    { label: "Content", items: [
      { icon: "upload", label: "Upload Document", href: "/faculty/upload-document.html" },
      { icon: "brain", label: "Class Memory", href: "/faculty/class-memory.html" },
    ]},
    { label: "Insight", items: [
      { icon: "users", label: "Student Insights", href: "/faculty/student-insights.html" },
      { icon: "chart", label: "Analytics", href: "/faculty/analytics.html" },
    ]},
    { label: "Personal", items: [
      { icon: "bell", label: "Notifications", href: "/faculty/notifications.html" },
      { icon: "user", label: "Profile", href: "/faculty/profile.html" },
    ]},
  ],
  admin: [
    { label: "Overview", items: [
      { icon: "home", label: "Dashboard", href: "/admin/dashboard.html" },
    ]},
    { label: "Institution", items: [
      { icon: "building", label: "Departments", href: "/admin/departments.html" },
      { icon: "layers", label: "Subjects", href: "/admin/subjects.html" },
      { icon: "cal", label: "Classes & Batches", href: "/admin/classes.html" },
      { icon: "users", label: "Faculty", href: "/admin/faculty.html" },
      { icon: "user", label: "Students", href: "/admin/students.html" },
    ]},
    { label: "Content", items: [
      { icon: "cal", label: "Academic Calendar", href: "/admin/calendar.html" },
      { icon: "file", label: "Documents", href: "/admin/documents.html" },
      { icon: "shield", label: "Verification Queue", href: "/admin/verification-queue.html" },
    ]},
    { label: "Insight", items: [
      { icon: "chart", label: "Analytics", href: "/admin/analytics.html" },
      { icon: "logs", label: "Audit Logs", href: "/admin/audit-logs.html" },
    ]},
    { label: "Personal", items: [
      { icon: "user", label: "Profile", href: "/admin/profile.html" },
    ]},
  ],
};

const CM_ROLE_ICON = { student: "🎓", faculty: "🧑‍🏫", admin: "🏛" };

function cmGetRole() { const s = cmSession(); return s ? s.role : "student"; }
function cmGetTheme() { return localStorage.getItem("cm_theme") || "light"; }
function cmApplyTheme() { document.documentElement.classList.toggle("dark", cmGetTheme() === "dark"); }
function cmSetTheme(mode) { localStorage.setItem("cm_theme", mode); cmApplyTheme(); cmSyncThemeSwitch(); }
function cmToggleTheme() { cmSetTheme(cmGetTheme() === "dark" ? "light" : "dark"); }
function cmSyncThemeSwitch() {
  const mode = cmGetTheme();
  document.querySelectorAll(".theme-switch [data-mode]").forEach(b => {
    const active = b.dataset.mode === mode;
    b.classList.toggle("active", active);
  });
}
cmApplyTheme();

function cmToast(msg, kind) {
  let wrap = document.getElementById("toast-wrap");
  if (!wrap) { wrap = document.createElement("div"); wrap.id = "toast-wrap"; document.body.appendChild(wrap); }
  const el = document.createElement("div");
  el.className = "toast";
  const color = kind === "error" ? "var(--danger)" : "var(--success)";
  el.innerHTML = `<span style="color:${color}">${cmIcon(kind === "error" ? "logout" : "check")}</span><span>${msg}</span>`;
  wrap.appendChild(el);
  setTimeout(() => { el.style.opacity = "0"; el.style.transition = ".3s"; setTimeout(() => el.remove(), 300); }, 3200);
}

function cmThemeSwitchHtml() {
  const mode = cmGetTheme();
  return `<div class="theme-switch" role="group" aria-label="Theme">
    <button class="${mode==='light'?'active':''}" data-mode="light" onclick="cmSetTheme('light')" title="Light mode">${cmIcon("sun")}</button>
    <button class="${mode==='dark'?'active':''}" data-mode="dark" onclick="cmSetTheme('dark')" title="Dark mode">${cmIcon("moon")}</button>
  </div>`;
}

function cmRenderShell(opts) {
  const prefix = opts.prefix || "..";
  const expectedRole = opts.active.split("/")[1]; // "student" | "faculty" | "admin"
  if (!cmRequireAuth(expectedRole, prefix)) {
    // Redirect is already in flight; stop the rest of this page's script from
    // running against a missing session (would otherwise throw null-reference errors).
    throw new Error("cm-auth-redirect");
  }

  const role = cmGetRole();
  const user = cmCurrentUser() || {};
  const sections = CM_NAV[role];
  document.body.classList.add("app-shell-body");

  const sidebarHtml = `
  <aside class="sidebar">
    <a href="${prefix}/index.html" class="sidebar-brand">
      <span class="mark">${cmIcon("brain")}</span>
      <span>Campus Memory</span>
    </a>
    ${sections.map(sec => `
      <div class="nav-section-label">${sec.label}</div>
      ${sec.items.map(it => `
        <a class="nav-item ${opts.active === it.href ? "active" : ""}" href="${prefix}${it.href}">
          ${cmIcon(it.icon)}<span>${it.label}</span>
        </a>`).join("")}
    `).join("")}
    <div style="margin-top:auto;padding-top:16px;display:flex;flex-direction:column;gap:10px">
      ${cmThemeSwitchHtml()}
      <div class="badge badge-accent" style="width:100%;justify-content:center;box-sizing:border-box">Demo Mode</div>
    </div>
  </aside>`;

  const unread = (cmList("notifications") || []).filter(n => !n.read).length;
  const initials = (user.name || "?").split(" ").map(w => w[0]).slice(0, 2).join("");

  const topbarHtml = `
  <div class="topbar">
    <button class="btn btn-ghost btn-sm mobile-menu-btn" onclick="cmToggleMobileNav()" style="padding:8px;display:none">${cmIcon("layers")}</button>
    <div class="search-trigger" onclick="cmOpenSearch()">
      ${cmIcon("search")}<span>Search your academic memory…</span><kbd>Ctrl K</kbd>
    </div>
    <div style="margin-left:auto;display:flex;align-items:center;gap:6px">
      <div class="theme-switch theme-switch-topbar">
        <button class="${cmGetTheme()==='light'?'active':''}" data-mode="light" onclick="cmSetTheme('light')" title="Light mode">${cmIcon("sun")}</button>
        <button class="${cmGetTheme()==='dark'?'active':''}" data-mode="dark" onclick="cmSetTheme('dark')" title="Dark mode">${cmIcon("moon")}</button>
      </div>
      <a class="btn btn-ghost btn-sm" href="${prefix}/${role}/notifications.html" style="padding:8px;position:relative">
        ${cmIcon("bell")}
        ${unread ? `<span style="position:absolute;top:5px;right:5px;width:8px;height:8px;border-radius:50%;background:var(--danger)"></span>` : ""}
      </a>
      <div style="position:relative" id="profile-menu-wrap">
        <button class="btn btn-ghost btn-sm" onclick="cmToggleProfileMenu()" style="padding:6px 10px">
          <span style="width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--accent));display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:800">${initials}</span>
          <span style="text-align:left;line-height:1.1">
            <div style="font-size:12.5px;font-weight:700">${user.name || "Account"}</div>
            <div style="font-size:10.5px;color:var(--text-muted);text-transform:capitalize">${CM_ROLE_ICON[role]} ${role}</div>
          </span>
        </button>
        <div id="profile-menu" class="card" style="display:none;position:absolute;right:0;top:46px;width:210px;padding:8px;z-index:40">
          <a class="nav-item" href="${prefix}/${role}/profile.html">${cmIcon("user")}<span>Edit Profile</span></a>
          <a class="nav-item" href="${prefix}/${role}/settings.html">${cmIcon("settings")}<span>Settings</span></a>
          <div style="height:1px;background:var(--border);margin:6px 0"></div>
          <a class="nav-item" href="${prefix}/login.html" onclick="cmLogout()" style="color:var(--danger)">${cmIcon("logout")}<span>Sign out</span></a>
        </div>
      </div>
    </div>
  </div>`;

  document.getElementById("cm-shell").innerHTML = `
    <div class="app-shell">
      ${sidebarHtml}
      <div class="main-col">
        ${topbarHtml}
        <div class="content">${document.getElementById("cm-page-content") ? document.getElementById("cm-page-content").innerHTML : ""}</div>
      </div>
    </div>
    ${cmBottomNav(role, prefix, opts.active)}
    ${cmSearchOverlay()}
  `;
  if (document.getElementById("cm-page-content")) document.getElementById("cm-page-content").remove();
}

function cmBottomNav(role, prefix, active) {
  const map = {
    student: [["home","Home","/student/dashboard.html"],["clock","Timeline","/student/timeline.html"],["search","Missed","/student/what-did-i-miss.html"],["file","Tasks","/student/assignments.html"],["user","Profile","/student/profile.html"]],
    faculty: [["home","Home","/faculty/dashboard.html"],["file","Assign.","/faculty/assignments.html"],["upload","Upload","/faculty/upload-document.html"],["users","Students","/faculty/student-insights.html"],["user","Profile","/faculty/profile.html"]],
    admin: [["home","Home","/admin/dashboard.html"],["shield","Verify","/admin/verification-queue.html"],["chart","Analytics","/admin/analytics.html"],["user","Profile","/admin/profile.html"]],
  };
  return `<nav class="bottom-nav">${map[role].map(([icon,label,href]) => `<a class="${active===href?"active":""}" href="${prefix}${href}">${cmIcon(icon)}<span>${label}</span></a>`).join("")}</nav>`;
}

function cmToggleProfileMenu() {
  const m = document.getElementById("profile-menu");
  m.style.display = m.style.display === "none" ? "block" : "none";
}
document.addEventListener("click", (e) => {
  const wrap = document.getElementById("profile-menu-wrap");
  if (wrap && !wrap.contains(e.target)) { const m = document.getElementById("profile-menu"); if (m) m.style.display = "none"; }
});

// ---- Global command-palette search ----
function cmSearchIndex() {
  const db = cmDB();
  const idx = [];
  (db.assignments||[]).forEach(a => idx.push({ type: "Assignment", label: a.title, sub: cmSubject(a.subject).name, href: `/student/assignment-detail.html?id=${a.id}` }));
  (db.exams||[]).forEach(e => idx.push({ type: "Exam", label: `${cmSubject(e.subject).name} — ${e.type}`, sub: cmFmtDate(e.date), href: `/student/exams.html` }));
  (db.documents||[]).forEach(d => idx.push({ type: "Document", label: d.title, sub: cmSubject(d.subject).name, href: `/student/subjects.html` }));
  (db.knowledgeBase||[]).forEach(k => idx.push({ type: "Knowledge", label: k.q, sub: k.category, href: `/student/knowledge-base.html` }));
  (db.subjects||[]).forEach(s => idx.push({ type: "Subject", label: s.name, sub: s.faculty, href: `/student/subjects.html` }));
  idx.push({ type: "Feature", label: "What did I miss?", sub: "Reconstruct your academic memory", href: "/student/what-did-i-miss.html" });
  idx.push({ type: "Feature", label: "Academic Risk Radar", sub: "See what needs attention", href: "/student/risk-radar.html" });
  idx.push({ type: "Feature", label: "Campus Memory Graph", sub: "Explore connections", href: "/student/memory-graph.html" });
  return idx;
}

function cmSearchOverlay() {
  return `
  <div id="search-overlay" class="overlay" style="display:none" onclick="if(event.target===this) cmCloseSearch()">
    <div class="modal" style="max-width:640px;margin-top:2vh">
      <div style="padding:14px 16px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:10px">
        ${cmIcon("search")}
        <input id="search-input" class="input" style="border:none;padding:4px;font-size:15px" placeholder="Search your academic memory…" oninput="cmRunSearch(this.value)" autofocus/>
        <button class="btn btn-ghost btn-sm" onclick="cmCloseSearch()">Esc</button>
      </div>
      <div id="search-results" class="scrollbar-thin" style="max-height:50vh;overflow-y:auto;padding:8px"></div>
    </div>
  </div>`;
}
function cmOpenSearch() {
  document.getElementById("search-overlay").style.display = "flex";
  document.getElementById("search-input").focus();
  cmRunSearch("");
}
function cmCloseSearch() { document.getElementById("search-overlay").style.display = "none"; }
function cmRunSearch(q) {
  const idx = cmSearchIndex();
  const results = q ? idx.filter(i => (i.label + i.sub + i.type).toLowerCase().includes(q.toLowerCase())) : idx.slice(0, 8);
  const prefix = cmPrefix();
  document.getElementById("search-results").innerHTML = results.length ? results.map(r => `
    <a class="nav-item" style="height:auto;padding:10px 12px" href="${prefix}${r.href}">
      <span class="badge badge-neutral" style="flex:none">${r.type}</span>
      <span style="flex:1"><div style="color:var(--text);font-weight:700">${r.label}</div><div style="font-size:11.5px">${r.sub}</div></span>
    </a>`).join("") : `<div class="empty-state">We couldn't find that in your academic memory.</div>`;
}
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); cmOpenSearch(); }
  if (e.key === "Escape") cmCloseSearch();
});

function cmPrefix() {
  // Determine relative prefix to root based on current path depth
  const path = window.location.pathname;
  return (path.includes("/student/") || path.includes("/faculty/") || path.includes("/admin/")) ? ".." : ".";
}

function cmToggleMobileNav() {
  const sb = document.querySelector(".sidebar");
  if (sb) sb.classList.toggle("mobile-open");
}
