class Person {

  // ...
  constructor(firstName,lastName,age){
    this.firstName=firstName
    this.lastName=lastName
    this.age=age
  }
  get getFirstName(){
    return this.firstName;
  }
  set changeFirstName(newFirstName){
    this.firstName=newFirstName;
  }

  get getLastName(){
    return this.lastName;
  }
  set changeLastName(newLastName){
    this.lastName=newLastName;
  }

  get getAge(){
    return this.age;
  }
  set setAge(newAge){
    this.age=newAge;
  }
  get fullName(){
    console.log(`${this.firstName} ${this.lastName}`)
  }

}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);
