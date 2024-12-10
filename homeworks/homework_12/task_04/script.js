/* 
Задание 4
Создайте массив с числами 1, 2, 3, 4, 5. Используя цикл for:

Умножьте каждый элемент на 2 и выведите результат в консоль.
Создайте новый массив, где каждый элемент будет равен квадрату элемента из исходного массива.
Выведите оба массива (исходный и новый) в консоль.*/

const numbersArray = [1, 2, 3, 4, 5];
const newNumbersArray = [];

console.log(numbersArray);

for (const i in numbersArray) {
  console.log(numbersArray[i] * 2);
  newNumbersArray.push(numbersArray[i] * numbersArray[i]);
  // newNumbersArray[i] = (numbersArray[i] * numbersArray[i])
  // newNumbersArray.push(numbersArray[i] ** 2);
  // newNumbersArray[i] = Math.pow(numbers[i], 2)


}
console.log(newNumbersArray);




// let elementBy2 = [];
// for (let i = 0; i < numbersArray.length; i++) {
//     elementBy2[i] = numbersArray[i] * 2;
// }
// console.log(elementBy2);

// let  elementInSquare = [];
// for (i = 0; i < numbersArray.length; i++){
//     elementInSquare[i] = Math.pow(numbersArray[i],2);
// }
// console.log(elementInSquare);
