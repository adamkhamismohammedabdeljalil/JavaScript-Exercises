

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};
let keyList=[];

function getKeys(obj) {
  for(let key in person){
     console.log(key);
     keyList.push(key);

  }
  
}


const keys = getKeys(person);
console.log(keyList)
