//+++++++++++++++++++++++++++++++++ array ++++++++++++++++++++++++++++++++++++++

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myarray = [1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj", "doga"]
const myarrayOne = new Array(1, 2, 3, 4, 5)

console.log(myarray[0]);
console.log(myarrayOne);


// ++++++++++++++++++++++++++++ array methods +++++++++++++++++++++++++++++++

myarray.push(6) // adds an element to the end of the array
console.log(myarray);

myarray.pop() // removes the last element of the array
console.log(myarray);

myarray.unshift(9) // adds an element to the beginning of the array
console.log(myarray);
myarray.shift() // removes the first element of the array
console.log(myarray);


console.log(myarray.includes(3)); // checks if the array includes a certain element
console.log(myarray.indexOf(3)); // returns the index of a certain element
console.log(myarray.reverse());// reverses the array
console.log(myarray.sort());// sorts the array in ascending order


const newArray = myarray.join()

console.log(myarray); // returns the array
console.log(newArray); // converts the array to a string


//+++++++++++++++++++++++   slice and splice  ++++++++++++++++++++++++++++++++

console.log("A ", myarray)

const myn1 = myarray.slice(1,3)
console.log(myn1)
console.log("B ",myarray)

const myn2 = myarray.splice(1,3)/
console.log("C ",myarray)
console.log(myn2)