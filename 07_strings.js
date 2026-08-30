const name="anish"
const greeting="Good Morning"

// concatenation
// console.log(greeting + " " + name); //old modell

const newGreeting = `${greeting} and ${name}`; //es6 model
console.log(newGreeting);


const gameName = new String("Fifa 2026")

console.log(gameName[0]);
console.log(gameName.__proto__); //useful to see all the methods available for string

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.includes("FIFA"));
console.log(gameName.charAt(5));
console.log(gameName.indexOf("a"));


const newString =gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(0,6) // use negative index to slice from end of string
console.log(anotherString);


const newStringOne = "    anish chakraborty    "
console.log(newStringOne.trim()); //removes whitespace from both ends of a string

const url = "https://www.youtube.com/watch?v=1234567890"
console.log(url.replace('=', '--'));

console.log(url.includes('youtube')); 


console.log(url.split('=')); //splits the string into an array and returns the second element of the array