function calculateAverageAge(persons) {
  // ...
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

// const average = calculateAverageAge(persons);
// console.log(persons);
// console.log(average);
// let summ=0;
// for(let key in persons){
  
//   summ+=persons[key.age];
// }
// let summ=0;
// const arr = [1, 2, 3, 4, 5];
// const average = persons.reduce((summ, persons[]) => a + b, 0) / persons.length;
// console.log(average);
let summ=0;

persons.forEach(person=>{
  summ+=person.age;
  
  average=summ/(persons.length);
  console.log(summ);
  console.log(average);

})