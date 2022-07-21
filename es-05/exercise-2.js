// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  switch(role){
    case "ceo":
      console.log('estimated salary is 2200 euros');
      break;
    case "manager":
      console.log('estimated salary is at least 1800 euros');
      break;
    case "cto" :
      console.log('estimated salary is at least 1800 euros'); 
      break;
    case "developer":
      console.log('estimated salary is at least 1500 euros');  
      break;
    default:
      console.log('estimated salary is at least 1000 euros')  

  }
  

}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

