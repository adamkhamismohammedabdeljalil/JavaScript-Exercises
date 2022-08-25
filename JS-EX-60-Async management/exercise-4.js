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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here
function fetchPersonById(personId){
  return new Promise((resolve,reject)=>{
    let person=persons.find(staff=>staff.id===personId);
    if(person){
      resolve(person);
    }else{
      reject(`sorry! id : ${personId}, does not exist.`);
    }
  })
}

function fetchJobById(jobId){
  return new Promise((resolve,reject)=>{
    let job=jobs.find(position=>position.id===jobId);
    if(job){
      resolve(job);
    }else{
      reject(`sorry! a job with id : ${jobId}, does not exist.`)
    }

    
  })
}

// fetchPersonById(10)
// .then(person=>console.log(person))
// .catch((error)=>console.log(error))

// fetchJobById(2)
// .then(job=>console.log(job))
// .catch((error)=>console.log(error))
Promise.all([fetchPersonById(1),fetchJobById(1)]).then(result=>console.log(result)).catch(error=>console.log(error))