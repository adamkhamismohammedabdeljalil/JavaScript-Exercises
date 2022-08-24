ceo => 2200
manager => 1800
cto => 1800
developer => 1500
defaultSalary => 1000
function calculateSalary(role) {
  // ...
  if(role==='ceo'){
    return `your salary as a ${role} is 2200 or more`
  }
  else if(role==='manager'){
    return `your salary as a ${role} is 1800 or more`
  }
  else if(role==='cto'){
    return `your salary as a ${role} is 1800 or more`
  }
  else if(role==='developer'){
    return `your salary as a ${role} is 1500 or more`
  }
  else{
    return `your salary as a  ${role} is 1000 or more`
  }

}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);
