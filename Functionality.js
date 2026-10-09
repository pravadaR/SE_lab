// Stores all Student objects
let students = [];

// Adds a new student to the list
function addStudent() {
  let input = document.getElementById("name");
  let name = input.value.trim();

  if (name === "") {
    alert("Please enter a name");
    return;
  }

  let student = new Student(students.length + 1, name);
  students.push(student);

  let li = document.createElement("li");
  li.innerText = student.getDetails();
  document.getElementById("studentList").appendChild(li);

  input.value = "";
}
