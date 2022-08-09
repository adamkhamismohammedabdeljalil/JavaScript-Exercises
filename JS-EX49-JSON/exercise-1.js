class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

// const { json } = require("express")

// const { json } = require("express")

const developer = new Person(1, 'Mario', 'Rossi', 25);
// Print developer as json object
let convert2Json=JSON.stringify(developer)
console.log(convert2Json)
