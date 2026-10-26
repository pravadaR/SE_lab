// StudentStorage: only job is saving/loading students in the browser
class StudentStorage {
  constructor(key = "students") {
    this.key = key;
  }

  save(students) {
    try {
      localStorage.setItem(this.key, JSON.stringify(students));
    } catch (e) {}
  }

  load() {
    try {
      let saved = JSON.parse(localStorage.getItem(this.key)) || [];
      return saved.map((s) => new Student(s.id, s.name));
    } catch (e) {
      return [];
    }
  }
}
