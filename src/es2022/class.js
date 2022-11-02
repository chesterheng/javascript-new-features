// private fields, methods and accessors
class User {
  name = "kodex";
  #password = "1234";
  get #getPwd() {
    return this.#password;
  }
  set #setPwd(data) {
    this.#password = data;
  }
}

const user = new User();

// static fields and methods
class Animal {
  static cow = "mammal";
}
console.log(Animal.cow);

// checks for private fields using the in keyword
class Person {
  #name = "Kelly";
  get #getName() {
    return this.#name;
  }
  set #setName(name) {
    this.#name = name;
  }
  static hasTitle(obj) {
    return #name in obj;
  }
}

const person = new Person();
console.log(Person.hasTitle(person));
