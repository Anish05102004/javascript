// for of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
    
}

const greetings = 'HELLO WORLD'

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

// maps

// const map = new Map()
// map.set('IN', "INDIA")
// map.set('USA', "UNITED STATE OF AMERICA")
// map.set('FR', "FRANCE")

// console.log(map)


const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATE OF AMERICA")
map.set('FR', "FRANCE")
map.set('IN', "INDIA") // map knows for unique value 2nd entry not allow

// console.log(map)

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

const myoOject = {
    game1: 'NFS',
    game2: 'SPIDERMAN'
}
// for (const [key, value] of myObject) { // myObject is not defined
//         console.log(key, ':-', value);
//     }
