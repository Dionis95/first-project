let fruits =["Äpple", "Granatäpple", "Banan", "Ananas", "Vattenmelon"];
console.log(fruits);

fruits.push("Blåbär");

let mixed = ["5", "Bananer", ["Kaffe", "Mjölk", "3kg"]];
console.log(mixed);

let animals = ["cat", "hamster", "parrot", "funky chihuahua"];
console.log(animals);
let animalsNumbers = animals.length;
console.log(animalsNumbers);

console.log(animals[0]);
console.log(animals[3]);

animals.splice(1, 1, "tiger", "dog");
console.log(animals);

let a = [1,2,3];
console.log(a);

let b = [4,5,6];
console.log(b);

let c = a.concat(b);
console.log(c);

let arr = ["a", "b", "c"];
let copyArr = arr.map(x=> (arr));
console.log(copyArr);

let frukt = ["Kiwi", "Apple", "Pear" ];
frukt.splice(3, 0, "Ananas" );
console.log(frukt);
frukt.splice(0, 0, "Banana");
console.log(frukt);
frukt.splice(4,1);
console.log(frukt);
frukt.splice(0,1);
console.log(frukt);

let names = ["David", "Christoffer", "Johan", "Lina"  ];
names.splice(1,2);
console.log(names);

let nums = [1,2,3,4,5,6,7,8,9];
let numsBackwards = nums.reverse();
console.log(numsBackwards);

let str = "Supercalifragilisticexpialidocious";

console.log(str.includes("n"));
console.log(str.includes("x"));

let index = str.indexOf("p");
console.log(index);

let fiveLetters = str.slice(0,5)
console.log("First five letters are: " + fiveLetters);

let lastSeven = str.slice(str.length -7);
console.log("Last seven letters are: " + lastSeven);






