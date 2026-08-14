//const tinderUser = new Object()  //singleton object
const tinderUser={}


tinderUser.id="123abc"
tinderUser.name = "sammay"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email:"acd@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sammy",
            lastname:"das"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname) // ? defined that value is or not

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)


const obj3 = {...obj1,...obj2} //spread method

// console.log(obj3)

const users = [
{

    id:1,
    email:"abf@gmail.com"
},
{

    id:2,
    email:"abvvvvaaaaf@gmail.com"
},
{

    id:3,
    email:"abfbvj@gmail.com"
}
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))//push all key in array
console.log(Object.values(tinderUser))//push all value in array
console.log(Object.entries(tinderUser))//craete small array using key value and push all array into a big array


console.log(tinderUser.hasOwnProperty('isLoggedIn'))