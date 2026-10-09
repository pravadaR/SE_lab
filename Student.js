// Student class: represents one student in the system
class Student {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  getDetails() {
    return `${this.id}. ${this.name}`;
  }
}
