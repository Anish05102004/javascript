const user = {
    username: "anish",
    id: 25,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`) //this is curent context 
        // console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this)// empty object

// function chai(){
//     let username =  "anish"
//     console.log(this.username) // it return undefined
// }
// chai()

// const chai = function(){
//     let username =  "anish"
//     console.log(this.username) // it return undefined
// }
// chai()


// const chai = () => { //arrow function
//     let username =  "anish"
//     console.log(this.username) // it return undefined
// }
// chai()

// const chai = () => { //arrow function
//     let username =  "anish"
//     console.log(this) // it return empty parenthesis
// }
// chai()


// const addTwo = (num1 , num2 ) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2 ) =>  num1 + num2 //implicit return
// const addTwo = (num1 , num2 ) =>  (num1 + num2) //when you use parenthesis not write return and when you use cuerly brases write return
// const addTwo = (num1 , num2 ) =>  {username: "anish"} //undefined
const addTwo = (num1 , num2 ) =>  ({username: "anish"})

console.log(addTwo(5,8))

// const Myarray = [1,2,5,6,8,5]

// Myarray.forEach()