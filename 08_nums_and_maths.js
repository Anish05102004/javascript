//+++++++++++++++++++++++NUMBERS+++++++++++++++++++++++++++++++

const score = 500
console.log(score);


const balance =  new Number(100)
console.log(balance);

console.log(balance.toString().length);// converts number to string and returns the length of the string
console.log(balance.toFixed(2));// rounds to 2 decimal places

const otherNumber = 123.123456789
console.log(otherNumber.toPrecision(5)); // rounds to 5 significant digits

const myNumber = 10000000
console.log(myNumber.toLocaleString('en-IN')); // converts number to locale string format


//++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++


console.log(Math);// returns the Math object
console.log(Math.PI);// returns the value of pi
console.log(Math.E);// returns the value of e
console.log(Math.abs(-4));// returns the absolute value of a number
console.log(Math.round(4.6));// rounds to the nearest integer
console.log(Math.floor(4.9));// rounds down to the nearest integer
console.log(Math.ceil(4.2));// rounds up to the nearest integer
console.log(Math.trunc(4.9));// removes the decimal part of a number
console.log(Math.pow(2,3));// returns the value of 2 to the power of 3
console.log(Math.sqrt(64));// returns the square root of a number
console.log(Math.min(0, 150, 30, 20, -8, -200));// returns the minimum value
console.log(Math.max(0, 150, 30, 20, -8, -200));// returns the maximum value


console.log(Math.random());// generates a random number between 0 and 1
console.log((Math.random() * 10) + 1); // generates a random number between 1 and 10
console.log(Math.floor((Math.random() * 10) + 1)); // generates a random integer between 1 and 10


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1))+min); // generates a random integer between min and max