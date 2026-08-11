let value =3
let newValue = -value 
console.log(newValue)  // -3


console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2)  //modulus operator => remainder of division
console.log(2**2)  //exponentiation operator => 2 power 2 => 4
console.log(-true)  // -1
console.log(-false)  // -0
console.log(2+true)  //3
console.log(2+false)  //2
console.log(2+null)  //2
console.log(2+undefined)  //NaN => Not a Number
console.log(2+NaN)  //NaN => Not a Number
console.log(2+Infinity)  //Infinity
console.log(2-Infinity)  //-Infinity
console.log(2*Infinity)  //Infinity
console.log(2/Infinity)  //0
console.log(2%Infinity)  //2
console.log(2**Infinity)  //Infinity
console.log(2**-Infinity)  //0
console.log(2**NaN)  //NaN



let str1 = "Hello"
let str2 = "World"


let str3 = str1 + str2  //concatenation operator => joining two strings
console.log(str3)  //HelloWorld


console.log("1" + 2)  
console.log(1 + "2")
console.log("1" + "2")
console.log("1" + 2 + 2)  //122   guidelines in ecmascript => left to right evaluation
console.log(1 + 2 + "2")  //32
console.log("1" + (2 + 2))  //14
console.log(1 + 2 + 3 + "4" + 5 + 6)  //6456
console.log(1 + 2 + 3 + "4" + (5 + 6))  //6411
console.log(1 + 2 * 3 % 5) //2



let num1,   num2,   num3

num1 = num2 = num3 = 2 + 2  //right to left evaluation


let gameCounter = 100
gameCounter++  //increment operator => gameCounter = gameCounter + 1
++gameCounter  //increment operator => gameCounter = gameCounter + 1
console.log(gameCounter)  //101



// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion