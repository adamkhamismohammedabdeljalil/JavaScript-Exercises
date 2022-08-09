class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }
  fromJson(){
    return JSON.parse(JSON.stringify(this))
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';


const developer = new Person(1,'Mario','Rossi',25);
//console.log(developer);
//solution from json to object
console.log(developer.fromJson(json))
//from object to json
console.log(developer.toJson(developer))