let score = true


console.log(typeof score)
console.log(typeof (score))  

let valueInNumber = Number(score) 
console.log(typeof valueInNumber)  
console.log(valueInNumber)  //NaN => Not a Number


// "33" => 33
// "33abc" => NaN
//true => 1
//false => 0


let isLoggedIn = "aaaa"
let booleanIsLoggedIn = Boolean(isLoggedIn)  //true
console.log(booleanIsLoggedIn)


// 1 => true
// 0 => false
// "" => false
// null => false
// undefined => false
// NaN => false


let someNumber = 33


let stringNumber = String(someNumber)  // "33"
console.log(typeof stringNumber)
console.log(stringNumber)  // "33"