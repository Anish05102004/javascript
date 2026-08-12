//dates

let  myDate = new Date();

console.log(typeof myDate);
console.log(myDate);// returns the current date and time
console.log(myDate.toString());// returns the current date and time in string format
console.log(myDate.toDateString());//  returns the current date in string format
console.log(myDate.toISOString());// returns the current date in ISO format
console.log(myDate.toUTCString());// returns the current date in UTC format
console.log(myDate.toLocaleString());// returns the current date in local format
console.log(myDate.toLocaleDateString());// returns the current date in local format
console.log(myDate.toLocaleTimeString());// returns the current time in local format
console.log(myDate.getFullYear());// returns the current year
console.log(myDate.getMonth());// returns the current month (0-11)
console.log(myDate.getDate());// returns the current date (1-31)
console.log(myDate.getDay());// returns the current day of the week (0-6)
console.log(myDate.getHours());// returns the current hour (0-23)
console.log(myDate.getMinutes());// returns the current minute (0-59)
console.log(myDate.getSeconds());// returns the current second (0-59)
console.log(myDate.getMilliseconds());// returns the current millisecond (0-999)
console.log(myDate.getTime());// returns the number of milliseconds since January 1, 1970
console.log(myDate.getTimezoneOffset());// returns the time zone offset in minutes

myDate.toLocaleString('default', {weekday: 'long',});// returns the current day of the week in long format



let myBirthday = new Date(2004,9,5);// month is 0-indexed, so 9 represents October
console.log(myBirthday.toDateString());// returns the date in string format
console.log(myBirthday.toLocaleDateString());// returns the date in local format
console.log(myBirthday.toLocaleString());// returns the date and time in local format

let myBirthdayOne = new Date(2004,9,5,5,3);
console.log(myBirthdayOne.toDateString());// returns the date in string format
console.log(myBirthdayOne.toLocaleDateString());// returns the date in local format
console.log(myBirthdayOne.toLocaleString());// returns the date and time in local format

let myTimeStamp = Date.now();

console.log(myTimeStamp);// returns the number of milliseconds since January 1, 1970
console.log(myBirthday.getTime());// returns the number of milliseconds since January 1, 1970
console.log(Math.floor(Date.now() / 1000));// returns the number of seconds since January 1, 1970
