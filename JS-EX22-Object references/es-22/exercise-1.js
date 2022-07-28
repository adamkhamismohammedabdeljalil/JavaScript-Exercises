const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  job: 'Web Developer',
  fullName(){
    return console.log(`${this.firstName} ${this.lastName}`);
  },
  info(){
    console.log(`My name is ${this.firstName} ${this.lastName} I am ${this.age} years old, I work as a ${this.job}`);
  }
  
}


console.log(person.fullName())
console.log(person.info())
