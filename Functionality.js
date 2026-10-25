// Stores all Student objects
let students = [];
let nextId = 1;

// Save students in the browser so they stay after refresh
function saveStudents() {
  try {
    localStorage.setItem("students", JSON.stringify(students));
  } catch (e) {}
}

// Load saved students when the page opens
function loadStudents() {
  try {
    let saved = JSON.parse(localStorage.getItem("students")) || [];
    students = saved.map((s) => new Student(s.id, s.name));
    nextId = students.length ? Math.max(...students.map((s) => s.id)) + 1 : 1;
  } catch (e) {
    students = [];
  }
}

// Adds a new student to the list
function addStudent() {
  let input = document.getElementById("name");
  let name = input.value.trim();

  if (name === "") {
    alert("Please enter a name");
    return;
  }

  students.push(new Student(nextId++, name));
  input.value = "";
  saveStudents();
  renderList();
}

// Removes a student by id
function deleteStudent(id) {
  students = students.filter((s) => s.id !== id);
  saveStudents();
  renderList();
}

// Redraws the list and the count
function renderList() {
  let list = document.getElementById("studentList");
  list.innerHTML = "";

  let query = document.getElementById("search").value.trim().toLowerCase();
  let visible = students.filter((s) => s.name.toLowerCase().includes(query));

  visible.forEach((student) => {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = student.getDetails();

    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.className = "delete-btn";
    btn.onclick = () => deleteStudent(student.id);

    li.appendChild(span);
    li.appendChild(btn);
    list.appendChild(li);
  });

  document.getElementById("count").innerText = `Total students: ${students.length}`;
}

// Add student on Enter key
document.getElementById("name").addEventListener("keydown", (e) => {
  if (e.key === "Enter") addStudent();
});

// Filter list while typing in search
document.getElementById("search").addEventListener("input", renderList);

loadStudents();
renderList();
