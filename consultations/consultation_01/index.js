const student = {
  age: 22,
  name: "Вася",
};
const age = 35;

const fruits = ["apple", "orange", "mango"];
const fruits1 = ["potato", "tomato", "cucumber"];
const joinFruitsAndFruits1 = [...fruits, "flower", ...fruits1];
// console.log(joinFruitsAndFruits1);

const brothers = [
  { race: "hobbit", height: 110, age: 45, name: "Frodo Baggins" },
  { race: "human", height: 185, age: 46, name: "Aragorn" },
  { race: "elf", height: 189, age: 110, name: "Legolas" },
  { race: "dworf", height: 140, age: 150, name: "Gimly" },
  { race: "human", height: 195, age: 200, name: "Gandalf" },
];

// const frodo = brothers[0]
// console.log(frodo);

const [frodo, aragorn, legolas, gimly, gandalf] = brothers;

console.log(gimly);

const ageOfFrodo = frodo.age;

console.log(ageOfFrodo);

const user = {id: 1, email: "user@example.com", login: "Admin"}
const {email, id, login} = user;

console.log(email);

const product = {
    title: "Iphone",
    price: 2000,
    "model of phone" : "XR"
}

console.log(product.price);
console.log(product["model of phone"]);

product.diagonal = 6.5;
product['type of adapter'] = "USB-C";

console.log(product);

const title = "Titanic";
const capacity = 1500;
const titanic = {title, capacity};
console.log(titanic);

const name1 = "Avrora";
const cap = 300;







