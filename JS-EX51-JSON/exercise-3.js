const person1 = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: {
    state: 'Italy',
    city: 'Rome',
    street: 'Via Romano, 12'
  }
};

//const person2 = { ...person1 };
//person2.address.city = 'Milan';



//solution
let person2=JSON.parse(JSON.stringify(person1))


person2.address.city='Milano';
console.log(person2);
console.log(person1);
console.log(person1===person2)