// Stores all Student objects
let students = [];
let nextId = 1;

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
  renderList();
}

// Removes a student by id
function deleteStudent(id) {
  students = students.filter((s) => s.id !== id);
  renderList();
}

// Redraws the list and the count
function renderList() {
  let list = document.getElementById("studentList");
  list.innerHTML = "";

  students.forEach((student) => {
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
