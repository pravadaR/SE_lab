// UI layer: only reads input and updates the page
const manager = new StudentManager(new StudentStorage());

function addStudent() {
  let input = document.getElementById("name");
  try {
    manager.add(input.value);
    input.value = "";
    renderList();
  } catch (e) {
    alert(e.message);
  }
}

function deleteStudent(id) {
  manager.remove(id);
  renderList();
}

function renderList() {
  let list = document.getElementById("studentList");
  list.innerHTML = "";

  let query = document.getElementById("search").value;
  manager.search(query).forEach((student) => {
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

  document.getElementById("count").innerText = `Total students: ${manager.count()}`;
}

document.getElementById("name").addEventListener("keydown", (e) => {
  if (e.key === "Enter") addStudent();
});

document.getElementById("search").addEventListener("input", renderList);

renderList();
