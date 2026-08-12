let myYoutubename = "Anish chakraborty";

let anotherName = myYoutubename;

anotherName = "Anish chakraborty 2";

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user1@example.com",
    upi: "user1@upi"
};


let userTwo = userOne;

userTwo.email = "user2@example.com";
userTwo.upi = "user2@upi";

console.log(userOne.email);
console.log(userTwo.email);
