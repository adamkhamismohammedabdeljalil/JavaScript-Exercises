const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(persons[id]);
    }, 1000);
  });
}
// // code here
function fulfilledCase(users) {
  console.log(users);
}

const promise = fetchPersonById(1);
promise.then(fulfilledCase);
