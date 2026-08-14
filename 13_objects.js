//singleton

// object literals

// Object.create

const mySym = Symbol("key1")

const JsUser = {
    name:"Anish",
    "full name":"anish chakraborty",
    [mySym] : "myKey1",// square bracket for symbol function
    age:21,
    location:"kolkata",
    email:"abc@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


JsUser.email = "anish@gmail.com"
 // Object.freeze(JsUser)
JsUser.email = "anish@outlook.com"
 // console.log(JsUser)


JsUser.greeting = function(){
    console.log("hello js user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user,${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())