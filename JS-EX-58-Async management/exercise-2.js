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
let success=false;

function fetchPersonById(id) {
  return new Promise((resolve,reject) => {
    setTimeout(() =>{ 
      if(success){
        resolve(persons.find(item => item.id === id))

      }else{reject(`Error! person with id ${id} does not exist`)}
    
    
  }, 1000);
  });
}

//fetchPersonById(2).then((person) => console.log(person));
fetchPersonById(5).catch((error)=>console.log(error))