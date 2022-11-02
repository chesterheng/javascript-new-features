const student = {
  name: "Mark",
  age: 18,
};

student.hasOwnProperty("name");
student.hasOwnProperty("grade");

// ES2022
Object.hasOwn(student, "name");
Object.hasOwn(student, "grade");
