/* Задание 2
Используя методы массива, получите из этого массива новый массив, в котором элементы идут в обратной последовательности.*/

let names = ["Мария", "Алексей", "Елена", "Дмитрий"];
let ages = [22, 31, 45, 53];

let sumNamesAges = [];

for (let i = 0; i < names.length; i++) {
  sumNamesAges.push("Имя: " + names[i] + ", возраст " + ages[i] + " лет/годов");
}
console.log(sumNamesAges);

// for in
for (const i in names) {
 sumNamesAges.push(`Имя: ${names[i]}, возраст  ${ages[i]} лет/годов`);
    
  }
  console.log(sumNamesAges);
  
  //for of
  for (const name of names) {
    console.log(name);
    
    
  }

//Task 2
let sumNamesAges2 = [];
for (let i = 0; i < names.length; i++) {
  sumNamesAges2.unshift(sumNamesAges[i]);
}
console.log(sumNamesAges2);

const resultReverse = [];

//Option 2
for (let i = sumNamesAges.length -1; i >= 0; i--) {
  resultReverse.push(result[i]);
}

const resultReverseMethod = sumNamesAges.reverse();
console.log(resultReverse);
console.log(resultReverseMethod);

