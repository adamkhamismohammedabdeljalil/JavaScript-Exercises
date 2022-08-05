const person = {
  // ...
  firstName:this.firstName,
  lastName:this.lastName,
  


  get getFirstName(){
    return this.firstName;


  },
  set setFirstName(newFirstName){
    this.firstName=newFirstName;



  },
  get getLastName(){
    return this.lastName;

  }, 
  set setLastName(newLastName){
    this.lastName=newLastName;

  },
  fullName(fistName,lastName){
    return `${this.firstName} ${this.lastName}`

  } 
  }

//console.log(john.fullName()); // John Doe
//console.log(simon.fullName()); // Simon Collins
//console.log(person.firstName)
//console.log(person.lastName)
let john=Object.create(person)
let simon=Object.create(person)


john.firstName='John'
john.lastName='Doe'
console.log(john.fullName())
simon.firstName='Simon'
simon.lastName='Collin'
console.log(simon.fullName())






