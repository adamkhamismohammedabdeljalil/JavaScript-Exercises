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
    setTimeout(()=>{
      let person=persons.find(staff=>staff.id===personId);
      if(person){
        resolve(person)
      }else{
        reject(`sorry! id : ${personId}, does not exist.`)
      }
    },1000)
  })
  
}

function fetchJobById(jobId){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let job=jobs.find(position=>position.id===jobId);
      if(job){
        resolve(job)
      }else{
        reject(`sorry! a job with id : ${jobId}, does not exist.`)
      }
    },500)
  })
}


// fetchPersonById(2)
// .then(person=>console.log(person))
// .catch(error=>console.log(error))

// fetchJobById(50)
// .then(job=>console.log(job))
// .catch(error=>console.log(error))

Promise.race([fetchPersonById(2),fetchJobById(100)])
.then(result=>console.log(result))
.catch(error=>console.log(error))