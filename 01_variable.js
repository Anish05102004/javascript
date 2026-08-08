const accountId = 12345
let accountEmail = "anishchakraborty35@gmail.com"
var accountPassword = "secure123"
accountCity = "New York"
let accountState;

//accountId = 9 // not allowed because accountId is a constant
accountEmail = "hs@gmail.com"
accountPassword = "newpassword123"
accountCity = "Los Angeles"




/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])