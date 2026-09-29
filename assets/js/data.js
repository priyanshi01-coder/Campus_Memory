/* ===== Campus Memory — Seed / Demo Data =====
   Fictional college: ABC Institute of Technology
   All data below is clearly demo data for presentation purposes. */

const CM_DATA = {
  college: "ABC Institute of Technology",
  demoMode: true,

  departments: [
    { id: "cse", name: "Computer Science", students: 240, faculty: 14 },
    { id: "it", name: "Information Technology", students: 180, faculty: 10 },
    { id: "ece", name: "Electronics", students: 150, faculty: 9 },
  ],

  batch: { course: "B.Tech CSE", year: "3rd Year", section: "A" },

  subjects: [
    { id: "dbms", name: "DBMS", faculty: "Dr. Meera Sharma", color: "#5B4FCF", unit: "Unit 3 — Normalization & Transactions" },
    { id: "ds", name: "Data Structures", faculty: "Prof. Arjun Rao", color: "#17B6D4", unit: "Unit 4 — Trees & Graphs" },
    { id: "os", name: "Operating Systems", faculty: "Dr. Kavita Iyer", color: "#B8720A", unit: "Unit 3 — Process Scheduling" },
    { id: "cn", name: "Computer Networks", faculty: "Prof. Rohan Das", color: "#178A4C", unit: "Unit 2 — TCP/IP" },
    { id: "maths", name: "Mathematics", faculty: "Dr. Anil Verma", color: "#C23B3B", unit: "Unit 5 — Probability" },
  ],

  student: {
    name: "Priyanshi Gupta",
    roll: "CSE21A034",
    course: "B.Tech CSE",
    year: "3rd Year",
    section: "A",
    email: "priyanshi.gupta@abcinstitute.edu",
  },

  faculty: {
    name: "Dr. Meera Sharma",
    dept: "Computer Science",
    subjects: ["DBMS"],
    classes: ["B.Tech CSE — 3rd Year A"],
  },

  admin: { name: "Rajeev Malhotra", role: "Department Admin", dept: "Computer Science" },

  // ---- Assignments ----
  assignments: [
    {
      id: "a1", subject: "dbms", title: "Assignment #3 — Normalization & Transactions",
      faculty: "Dr. Meera Sharma", deadline: "2026-08-14T23:59:00", announced: "2026-08-06T12:30:00",
      maxMarks: 20, status: "in_progress", priority: 92, effortHrs: 3,
      topics: ["Normalization (1NF-3NF)", "Transaction schedules", "ACID properties"],
      instructions: "Solve all 5 questions. Submit as a single PDF via the portal. Show all normalization steps.",
      submissionMethod: "Portal upload (PDF)", attachment: "DBMS_Assignment_3.pdf",
      submitted: 48, total: 62,
    },
    {
      id: "a2", subject: "os", title: "Assignment #2 — CPU Scheduling Algorithms",
      faculty: "Dr. Kavita Iyer", deadline: "2026-08-12T23:59:00", announced: "2026-08-01T10:00:00",
      maxMarks: 15, status: "pending", priority: 78, effortHrs: 2,
      topics: ["FCFS", "SJF", "Round Robin", "Priority Scheduling"],
      instructions: "Implement and compare 4 scheduling algorithms with Gantt charts.",
      submissionMethod: "Portal upload (PDF + code)", attachment: "OS_Assignment_2.pdf",
      submitted: 55, total: 62,
    },
    {
      id: "a3", subject: "ds", title: "Assignment #4 — Graph Traversal",
      faculty: "Prof. Arjun Rao", deadline: "2026-08-16T23:59:00", announced: "2026-08-05T09:00:00",
      maxMarks: 20, status: "pending", priority: 64, effortHrs: 2.5,
      topics: ["BFS", "DFS", "Topological Sort"],
      instructions: "Implement BFS/DFS on a weighted graph and submit source code with explanation.",
      submissionMethod: "GitHub link submission", attachment: "DS_Assignment_4.pdf",
      submitted: 30, total: 62,
    },
    {
      id: "a4", subject: "cn", title: "Assignment #2 — Subnetting Practice",
      faculty: "Prof. Rohan Das", deadline: "2026-08-20T23:59:00", announced: "2026-07-30T11:00:00",
      maxMarks: 10, status: "pending", priority: 35, effortHrs: 1.5,
      topics: ["IP Addressing", "Subnet masks", "CIDR"],
      instructions: "Solve the 10 subnetting problems in the attached worksheet.",
      submissionMethod: "Portal upload (PDF)", attachment: "CN_Assignment_2.pdf",
      submitted: 12, total: 62,
    },
    {
      id: "a5", subject: "maths", title: "Assignment #3 — Probability Distributions",
      faculty: "Dr. Anil Verma", deadline: "2026-08-05T23:59:00", announced: "2026-07-25T09:00:00",
      maxMarks: 10, status: "submitted", priority: 5, effortHrs: 1,
      topics: ["Binomial distribution", "Poisson distribution"],
      instructions: "Solve all problems in Chapter 5, section 5.4.",
      submissionMethod: "Portal upload (PDF)", attachment: "Maths_Assignment_3.pdf",
      submitted: 60, total: 62,
    },
  ],

  // ---- Exams ----
  exams: [
    { id: "e1", subject: "dbms", type: "Viva", date: "2026-08-13", time: "10:00 AM", room: "Lab 2", topics: ["Normalization", "Transactions", "SQL Joins"], faculty: "Dr. Meera Sharma" },
    { id: "e2", subject: "os", type: "Internal Assessment", date: "2026-08-19", time: "9:00 AM", room: "Room 204", topics: ["Process Scheduling", "Deadlocks", "Memory Management"], faculty: "Dr. Kavita Iyer" },
    { id: "e3", subject: "ds", type: "Class Test", date: "2026-08-22", time: "11:00 AM", room: "Room 108", topics: ["Trees", "Graphs"], faculty: "Prof. Arjun Rao" },
    { id: "e4", subject: "cse-proj", type: "Project Review", date: "2026-08-15", time: "2:00 PM", room: "Seminar Hall", topics: ["Mid-term project demo"], faculty: "Panel" },
  ],

  // ---- Attendance ----
  attendance: {
    threshold: 75,
    overall: 82,
    subjects: [
      { id: "dbms", attended: 39, total: 50, pct: 78 },
      { id: "ds", attended: 44, total: 50, pct: 88 },
      { id: "os", attended: 46, total: 50, pct: 92 },
      { id: "cn", attended: 37, total: 50, pct: 74 },
      { id: "maths", attended: 41, total: 50, pct: 82 },
    ],
  },

  // ---- Timeline events (today = 2026-08-08) ----
  timeline: [
    { id: "t1", date: "2026-08-08", time: "10:00 AM", subject: "ds", type: "Lecture", title: "Binary Trees — traversal methods", source: "Faculty" },
    { id: "t2", date: "2026-08-08", time: "12:30 PM", subject: "dbms", type: "Assignment", title: "Assignment #3 announced", source: "Faculty" },
    { id: "t3", date: "2026-08-08", time: "2:00 PM", subject: "maths", type: "Attendance", title: "Attendance updated", source: "System" },
    { id: "t4", date: "2026-08-08", time: "6:00 PM", subject: "os", type: "Notes", title: "Unit 3 notes uploaded", source: "Faculty" },
    { id: "t5", date: "2026-08-05", time: "9:00 AM", subject: "ds", type: "Lecture", title: "Unit 3 completed", source: "Faculty" },
    { id: "t6", date: "2026-08-05", time: "11:00 AM", subject: "ds", type: "Notes", title: "Unit 3 notes uploaded", source: "Faculty" },
    { id: "t7", date: "2026-08-05", time: "1:00 PM", subject: "os", type: "Lecture", title: "Process scheduling discussed; important questions marked", source: "Faculty" },
    { id: "t8", date: "2026-08-06", time: "10:00 AM", subject: "dbms", type: "Lecture", title: "SQL Joins covered", source: "Faculty" },
    { id: "t9", date: "2026-08-06", time: "12:30 PM", subject: "dbms", type: "Assignment", title: "Assignment #3 announced · deadline Friday", source: "Faculty" },
    { id: "t10", date: "2026-08-07", time: "10:00 AM", subject: "cn", type: "Lecture", title: "TCP/IP completed", source: "Faculty" },
    { id: "t11", date: "2026-08-07", time: "11:30 AM", subject: "cn", type: "Notes", title: "Notes uploaded", source: "Faculty" },
    { id: "t12", date: "2026-08-12", time: "11:59 PM", subject: "os", type: "Deadline", title: "OS Assignment #2 due", source: "System" },
    { id: "t13", date: "2026-08-13", time: "10:00 AM", subject: "dbms", type: "Exam", title: "DBMS Viva", source: "Faculty" },
    { id: "t14", date: "2026-08-14", time: "11:59 PM", subject: "dbms", type: "Deadline", title: "DBMS Assignment #3 due", source: "System" },
    { id: "t15", date: "2026-08-15", time: "2:00 PM", subject: "cse-proj", type: "Exam", title: "Project Review", source: "Faculty" },
  ],

  // ---- Notices / documents ----
  documents: [
    { id: "d1", title: "DBMS Assignment 3.pdf", subject: "dbms", uploadedBy: "Dr. Meera Sharma", date: "2026-08-06", status: "published", aiExtracted: true },
    { id: "d2", title: "OS Unit 3 Notes.pdf", subject: "os", uploadedBy: "Dr. Kavita Iyer", date: "2026-08-08", status: "published", aiExtracted: false },
    { id: "d3", title: "Internal Assessment Notice — CSE 3rd Year.pdf", subject: "os", uploadedBy: "Admin Office", date: "2026-08-04", status: "pending_review", aiExtracted: true },
    { id: "d4", title: "CN Unit 2 Notes.pdf", subject: "cn", uploadedBy: "Prof. Rohan Das", date: "2026-08-07", status: "published", aiExtracted: false },
  ],

  // ---- Notifications ----
  notifications: [
    { id: "n1", priority: "critical", title: "DBMS Assignment #3 is due tomorrow", desc: "Submit before 11:59 PM to avoid a late penalty.", time: "2 hours ago", read: false },
    { id: "n2", priority: "important", title: "New OS Unit 3 notes uploaded", desc: "Dr. Kavita Iyer uploaded new notes on Process Scheduling.", time: "5 hours ago", read: false },
    { id: "n3", priority: "important", title: "Internal Assessment scheduled", desc: "OS Internal Assessment on 19 August, Room 204.", time: "1 day ago", read: true },
    { id: "n4", priority: "normal", title: "Attendance updated", desc: "Your Mathematics attendance was updated to 82%.", time: "1 day ago", read: true },
    { id: "n5", priority: "normal", title: "CN Unit 2 notes uploaded", desc: "Prof. Rohan Das uploaded notes on TCP/IP.", time: "2 days ago", read: true },
  ],

  // ---- Knowledge Base ----
  knowledgeBase: [
    { id: "k1", category: "Examinations", q: "How do I apply for a back paper?", a: "Submit the back-paper application form from the examination portal within 10 days of results, along with the prescribed fee receipt.", trust: "official" },
    { id: "k2", category: "Scholarships", q: "Where do I submit scholarship documents?", a: "Scholarship documents are submitted at the Student Affairs office, Block B, or uploaded via the scholarship portal before the semester deadline.", trust: "official" },
    { id: "k3", category: "Internships", q: "How do I apply for industrial training?", a: "Register through the Training & Placement Cell portal at least 4 weeks before your intended training period, with a no-objection letter from your department.", trust: "faculty" },
    { id: "k4", category: "Projects", q: "What is the process for project approval?", a: "Submit a one-page synopsis to your project guide, who forwards it to the departmental committee for approval within 2 weeks.", trust: "faculty" },
    { id: "k5", category: "Administration", q: "Where can I get my enrollment information?", a: "Enrollment details are available on the student portal under Profile → Academic Records.", trust: "official" },
    { id: "k6", category: "Academic", q: "What documents are required for revaluation?", a: "From my experience, you just need the revaluation form and fee receipt — no need for the original answer sheet copy.", trust: "student" },
  ],

  // ---- Class memory ----
  classMemory: {
    dbms: {
      difficultTopics: [
        { topic: "Normalization", pct: 78 },
        { topic: "Transaction schedules", pct: 64 },
        { topic: "Indexing", pct: 52 },
      ],
      faq: [
        "Difference between 2NF and 3NF?",
        "How do SQL JOINs differ from subqueries?",
        "What makes a transaction schedule serializable?",
      ],
      facultyImportant: ["Normalization", "Transactions", "ER-to-relational mapping"],
      examPattern: [
        { unit: "Unit 3 — Normalization", freq: "Frequently asked" },
        { unit: "Unit 4 — Transactions", freq: "Moderate" },
        { unit: "Unit 2 — SQL", freq: "Frequently asked" },
      ],
    },
  },

  // ---- Verification queue ----
  verificationQueue: [
    { id: "v1", type: "AI Extracted", title: "Internal Assessment Notice — CSE 3rd Year", submittedBy: "AI Extraction", confidence: "high", status: "pending" },
    { id: "v2", type: "Student Contribution", title: "Revaluation document requirements", submittedBy: "Anonymous Student", confidence: null, status: "pending" },
    { id: "v3", type: "Faculty Submission", title: "DBMS Assignment #3 details", submittedBy: "Dr. Meera Sharma", confidence: null, status: "approved" },
  ],

  // ---- Memory graph ----
  graph: {
    nodes: [
      { id: "student", label: "Priyanshi Gupta", type: "student" },
      { id: "dbms", label: "DBMS", type: "subject" },
      { id: "faculty1", label: "Dr. Meera Sharma", type: "faculty" },
      { id: "a1", label: "Assignment #3", type: "assignment" },
      { id: "deadline1", label: "14 Aug Deadline", type: "event" },
      { id: "doc1", label: "Assignment PDF", type: "document" },
      { id: "topic1", label: "Normalization", type: "topic" },
      { id: "topic2", label: "Transactions", type: "topic" },
      { id: "exam1", label: "DBMS Viva", type: "exam" },
      { id: "os", label: "Operating Systems", type: "subject" },
      { id: "faculty2", label: "Dr. Kavita Iyer", type: "faculty" },
      { id: "a2", label: "Assignment #2", type: "assignment" },
    ],
    edges: [
      ["student", "dbms"], ["student", "os"],
      ["dbms", "faculty1"], ["dbms", "a1"], ["dbms", "exam1"],
      ["a1", "deadline1"], ["a1", "doc1"], ["a1", "topic1"], ["a1", "topic2"],
      ["exam1", "topic1"], ["exam1", "topic2"],
      ["os", "faculty2"], ["os", "a2"],
    ],
  },

  // ---- Academic history ----
  history: [
    { year: "Year 1", sem: "Semester 1", subjects: 6, attendance: 88, gpa: 8.2 },
    { year: "Year 1", sem: "Semester 2", subjects: 6, attendance: 85, gpa: 8.4 },
    { year: "Year 2", sem: "Semester 3", subjects: 7, attendance: 81, gpa: 8.1 },
    { year: "Year 2", sem: "Semester 4", subjects: 7, attendance: 84, gpa: 8.5 },
    { year: "Year 3", sem: "Semester 5", subjects: 5, attendance: 82, gpa: null },
  ],
};

// ---- Derived helpers (live-DB aware: if the local store has been edited, prefer it) ----
function cmSubject(id) {
  try {
    if (typeof cmDB === "function") {
      const s = (cmDB().subjects || []).find(s => s.id === id);
      if (s) return s;
    }
  } catch (e) {}
  return CM_DATA.subjects.find(s => s.id === id) || { name: id, color: "#888" };
}
function cmFmtDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}
function cmDaysUntil(iso) {
  const now = new Date("2026-08-08T08:00:00");
  const target = new Date(iso);
  return Math.ceil((target - now) / (1000 * 60 * 60 * 24));
}
