/* Задание 2
Задание 3
Создайте пустой массив countries. Добавьте в массив следующие страны: "Франция", "Германия", "Италия". Удалите последний элемент из массива и сохраните значение в переменной. Добавьте его в начало массива. Выведите countries в консоль.*/

let countries = [];
// countries.push("Франция");
// countries.push("Германия");
// countries.push("Италия");

countries.push("Франция", "Германия", "Италия");

console.log(countries);

let lastItem = countries.pop();

countries.unshift(lastItem);

console.log(countries);
