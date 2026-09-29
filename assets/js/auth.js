/* ===== Campus Memory — Auth (local, demo-grade) =====
   Email+password gate that lives entirely in this browser via localStorage.
   This restricts casual access and keeps roles separate on THIS device — it is
   NOT secure server-verified authentication. See README for what real auth needs. */

const CM_SESSION_KEY = "cm_session";

function cmSignup(role, name, email, password, extra) {
  email = email.trim().toLowerCase();
  const db = cmDB();
  if (!db.users) db.users = [];
  if (db.users.some(u => u.email === email)) {
    return { ok: false, error: "An account with that email already exists." };
  }
  if (!name || !email || password.length < 6) {
    return { ok: false, error: "Please provide a name, valid email, and a password of at least 6 characters." };
  }
  const user = { id: "u_" + Date.now().toString(36), role, name, email, pass: cmHash(password), ...extra };
  db.users.push(user);
  cmSaveDB(db);
  cmSetSession(user);
  return { ok: true, user };
}

function cmLogin(role, email, password) {
  email = email.trim().toLowerCase();
  const db = cmDB();
  const user = (db.users || []).find(u => u.email === email && u.role === role);
  if (!user) return { ok: false, error: "No account found for that email under this role." };
  if (user.pass !== cmHash(password)) return { ok: false, error: "Incorrect password." };
  cmSetSession(user);
  return { ok: true, user };
}

function cmSetSession(user) {
  localStorage.setItem(CM_SESSION_KEY, JSON.stringify({ id: user.id, role: user.role, email: user.email, name: user.name }));
}
function cmSession() {
  try { return JSON.parse(localStorage.getItem(CM_SESSION_KEY)); } catch (e) { return null; }
}
function cmLogout() {
  localStorage.removeItem(CM_SESSION_KEY);
}
function cmCurrentUser() {
  const s = cmSession();
  if (!s) return null;
  return cmGet("users", s.id);
}

// Redirect to login if not authenticated as the expected role for this folder.
// Call this at the very top of every protected page, before rendering anything.
function cmRequireAuth(expectedRole, prefixToRoot) {
  const s = cmSession();
  if (!s || s.role !== expectedRole) {
    window.location.href = (prefixToRoot || "..") + "/login.html?role=" + expectedRole + "&next=1";
    return false;
  }
  return true;
}
