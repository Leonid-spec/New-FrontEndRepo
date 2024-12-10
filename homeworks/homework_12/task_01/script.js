/* 
Задание 1
Создайте массив с элементами: "Мария", "Алексей", "Елена", "Дмитрий". Создайте массив с возрастами: 22, 31, 45, 53. Создайте новый массив, заполнив его элементами в формате "имя возраст лет/годов".
*/


const names = ["Мария", "Алексей", "Елена", "Дмитрий"];
const ages = [22, 31, 45, 53];

let result = [];

for (let i = 0; i < names.length; i++) {
    // result.push('Имя: ' + names[i] + ', возраст ' + ages[i] + ' лет/годов' ); // конкатенация
    result.push(`Имя: ${names[i]}, возраст  ${ages[i]} лет/годов` ); // конкатенация
}
console.log(result)

//Поверхностное копирование (чтение информации)
const arr1 = [1,2,3];
const arr1Copy = arr1;

arr1Copy[0] = 1000;

console.log(arr1);
console.log(arr1Copy);

//Глубокое копирование (чтение и редактирование информации)

const arr = [1,2,3];
const arrCopy = [...arr];// spread

arrCopy[0] = 1000;


console.log(arr);
console.log(arrCopy);


