const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);
person2.firstName='Simon';
console.log(person2)
console.log(person1.firstName)
console.log(person2.firstName)
//perché questa è una copia superficiale e non una copia profonda
