// StudentManager: only job is managing the list of students (no DOM, no localStorage)
class StudentManager {
  constructor(storage) {
    this.storage = storage; // any object with load() and save()
    this.students = storage.load();
    this.nextId = this.students.length
      ? Math.max(...this.students.map((s) => s.id)) + 1
      : 1;
  }

  add(name) {
    name = name.trim();
    if (name === "") throw new Error("Please enter a name");
    let student = new Student(this.nextId++, name);
    this.students.push(student);
    this.storage.save(this.students);
    return student;
  }

  remove(id) {
    this.students = this.students.filter((s) => s.id !== id);
    this.storage.save(this.students);
  }

  search(query) {
    query = query.trim().toLowerCase();
    return this.students.filter((s) => s.name.toLowerCase().includes(query));
  }

  count() {
    return this.students.length;
  }
}
