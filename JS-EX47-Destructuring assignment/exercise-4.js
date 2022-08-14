const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

// for (let item of Object.entries(person)) {
//   console.log(`${item[0]}: ${item[1]}`);
// }
// console.log()
const {id,firstName,lastName,age}=person
console.log('id:',id)
console.log('firstName:',firstName)
console.log('lastName:',lastName)
console.log('age:',age)