function sayMyName(){
console.log("a")
console.log("b")
console.log("c")
console.log("d")
console.log("e")
console.log("f")
console.log("h")
}


// sayMyName() //execute of this function

// function addTwoNo(num1,num2){ //parameters num1, num2
//     console.log(num1+num2)
// }

// addTwoNo(3,4)
// addTwoNo(3,"4")
// addTwoNo(3,"a")
// addTwoNo(3,null) // arguments 3, null
// const result = addTwoNo(4,5)

// console.log("Result: ",result)


function addTwoNo(num1,num2){ //parameters num1, num2
    // let result= num1+num2
    // return result

    return num1+num2
}
const result = addTwoNo(4,5)
// console.log("Result: ",result)


function loginuserMessage(username){
    return`${username} just logged in`
}
// console.log(loginuserMessage("anish"))
// console.log(loginuserMessage())

function loginuserMessage(username){
    if(username==undefined){ // if statement
        console.log("please enter username")
        return
    }
    return`${username} just logged in`
}
// console.log(loginuserMessage("anish"))
 // console.log(loginuserMessage())

 function loginuserMessage(username){
    if(!username){ // ! symbol is for true or false
        console.log("please enter username")
        return
    }
    return`${username} just logged in`
}
// console.log(loginuserMessage("anish"))
// console.log(loginuserMessage())

function loginuserMessage(username="sam"){
    if(!username){ // ! symbol is for true or false
        console.log("please enter username")
        return
    }
    return`${username} just logged in`
}
// console.log(loginuserMessage("anish"))
// console.log(loginuserMessage())

function loginuserMessage(username="sam"){
    if(!username){ // ! symbol is for true or false
        console.log("please enter username")
        return
    }
    return`${username} just logged in`
}
// console.log(loginuserMessage("anish"))
// console.log(loginuserMessage("anish")) //here anish overwrite sam


function calculateCartPrice(...num1){ // ... rest operator
    return num1
}

//console.log(calculateCartPrice(200,400,500,600))

function calculateCartPrice(val1,val2,...num1){ // ... rest operator
    return num1
}

//console.log(calculateCartPrice(200,400,500,600))


const user = {
    username : "anish",
    id:999
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and id is ${anyobject.id}`)
}

// handleobject(user)
handleobject({
    username: "sam",
    id:60
})


const mynewarray = [200,400,600,458]

function returnsecondvalue(getarray){
    return getarray[1]
}


// console.log(returnsecondvalue(mynewarray))
console.log(returnsecondvalue([200,400,600,458]))