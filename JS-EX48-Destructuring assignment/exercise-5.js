const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const { id, name='Mario', surname='Rossi', old=25 } = person;
console.log(id, name, surname, old);