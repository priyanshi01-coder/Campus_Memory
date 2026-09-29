/* ===== Campus Memory — Local Data Store =====
   This is a browser-local database substitute (localStorage). It persists everything
   you add/edit/delete on THIS device, in THIS browser. It is not shared across devices
   and is not a real backend — see README for what production would need. */

const CM_DB_KEY = "cm_db_v2";

function cmSeedDB() {
  const seed = JSON.parse(JSON.stringify(CM_DATA));
  seed.users = [
    { id: "u_student_1", role: "student", name: "Priyanshi Gupta", email: "priyanshi.gupta@abcinstitute.edu",
      pass: cmHash("demopass"), roll: "CSE21A034", course: "B.Tech CSE", year: "3rd Year", section: "A", dept: "cse" },
    { id: "u_faculty_1", role: "faculty", name: "Dr. Meera Sharma", email: "meera.sharma@abcinstitute.edu",
      pass: cmHash("demopass"), dept: "cse", subjects: ["dbms"] },
    { id: "u_admin_1", role: "admin", name: "Rajeev Malhotra", email: "rajeev.malhotra@abcinstitute.edu",
      pass: cmHash("demopass"), dept: "cse", title: "Department Admin" },
  ];
  seed.batches = [{ id: "b1", course: "B.Tech CSE", year: "3rd Year", section: "A", students: 62 }];
  seed.students = [
    { id: "s1", name: "Priyanshi Gupta", roll: "CSE21A034", email: "priyanshi.gupta@abcinstitute.edu", section: "A", year: "3rd Year", course: "B.Tech CSE", attendance: 82 },
    { id: "s2", name: "Aarav Mehta", roll: "CSE21A035", email: "aarav.mehta@abcinstitute.edu", section: "A", year: "3rd Year", course: "B.Tech CSE", attendance: 71 },
    { id: "s3", name: "Sanya Kapoor", roll: "CSE21A036", email: "sanya.kapoor@abcinstitute.edu", section: "A", year: "3rd Year", course: "B.Tech CSE", attendance: 88 },
    { id: "s4", name: "Rohit Sharma", roll: "CSE21A037", email: "rohit.sharma@abcinstitute.edu", section: "A", year: "3rd Year", course: "B.Tech CSE", attendance: 69 },
    { id: "s5", name: "Diya Verma", roll: "CSE21A038", email: "diya.verma@abcinstitute.edu", section: "A", year: "3rd Year", course: "B.Tech CSE", attendance: 91 },
    { id: "s6", name: "Karan Singh", roll: "CSE21A039", email: "karan.singh@abcinstitute.edu", section: "A", year: "3rd Year", course: "B.Tech CSE", attendance: 73 },
    { id: "s7", name: "Neha Reddy", roll: "CSE21A040", email: "neha.reddy@abcinstitute.edu", section: "A", year: "3rd Year", course: "B.Tech CSE", attendance: 85 },
    { id: "s8", name: "Vikram Joshi", roll: "CSE21A041", email: "vikram.joshi@abcinstitute.edu", section: "A", year: "3rd Year", course: "B.Tech CSE", attendance: 79 },
  ];
  seed.facultyList = [
    { id: "f1", name: "Dr. Meera Sharma", email: "meera.sharma@abcinstitute.edu", dept: "cse", subjects: ["dbms"] },
    { id: "f2", name: "Prof. Arjun Rao", email: "arjun.rao@abcinstitute.edu", dept: "cse", subjects: ["ds"] },
    { id: "f3", name: "Dr. Kavita Iyer", email: "kavita.iyer@abcinstitute.edu", dept: "cse", subjects: ["os"] },
    { id: "f4", name: "Prof. Rohan Das", email: "rohan.das@abcinstitute.edu", dept: "cse", subjects: ["cn"] },
    { id: "f5", name: "Dr. Anil Verma", email: "anil.verma@abcinstitute.edu", dept: "cse", subjects: ["maths"] },
  ];
  return seed;
}

function cmDB() {
  let raw = localStorage.getItem(CM_DB_KEY);
  if (!raw) {
    const seeded = cmSeedDB();
    localStorage.setItem(CM_DB_KEY, JSON.stringify(seeded));
    return seeded;
  }
  try { return JSON.parse(raw); } catch (e) { const seeded = cmSeedDB(); localStorage.setItem(CM_DB_KEY, JSON.stringify(seeded)); return seeded; }
}
function cmSaveDB(db) { localStorage.setItem(CM_DB_KEY, JSON.stringify(db)); }
function cmResetDB() { localStorage.removeItem(CM_DB_KEY); localStorage.removeItem("cm_session"); localStorage.removeItem("cm_api_key"); }

// ---- Tiny non-cryptographic hash for demo-only password gating ----
// NOTE: this is NOT secure. It only prevents plaintext storage in this local prototype.
// A real system must hash+salt server-side (e.g. bcrypt/argon2) and never trust the client.
function cmHash(str) {
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (h1 >>> 0).toString(16) + (h2 >>> 0).toString(16);
}

// ---- Generic CRUD over a named collection ----
function cmList(collection) { return cmDB()[collection] || []; }
function cmGet(collection, id) { return cmList(collection).find(x => x.id === id) || null; }
function cmAdd(collection, obj) {
  const db = cmDB();
  if (!db[collection]) db[collection] = [];
  if (!obj.id) obj.id = collection.slice(0, 2) + "_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  db[collection].push(obj);
  cmSaveDB(db);
  return obj;
}
function cmUpdate(collection, id, patch) {
  const db = cmDB();
  const arr = db[collection] || [];
  const idx = arr.findIndex(x => x.id === id);
  if (idx === -1) return null;
  arr[idx] = { ...arr[idx], ...patch };
  cmSaveDB(db);
  return arr[idx];
}
function cmRemove(collection, id) {
  const db = cmDB();
  db[collection] = (db[collection] || []).filter(x => x.id !== id);
  cmSaveDB(db);
}
