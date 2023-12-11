/* eslint-disable no-underscore-dangle */
class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // name getter and setter
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // length getter and setter
  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // students getter and setter
  get students() {
    return this._students;
  }

  set students(students) {
    if (students instanceof Array) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an Array');
    }
  }
}

export default HolbertonCourse;
