function Person(firstName, lastName) {
  // ...
  this.firstName=firstName;
  this.lastName=lastName;
  this.fullName=function(){
    return console.log(`${this.firstName}  ${this.lastName}`);
  }
}


const john=new Person('John','Doe');
const simon=new Person('Simon','Collins')
console.log(john.fullName())
console.log(simon.fullName())
console.log(simon)
