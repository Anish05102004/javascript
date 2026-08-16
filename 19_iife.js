// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`)
})(); // ; is used for invoke the function 

//{} for function definition   () for execution
// An IIFE is created by wrapping a standard function
//  expression in grouping parentheses () to convert 
// it into an expression, followed by an invocation 
// operator () to execute it immediately.

(function chai2(){
    // named iife
    console.log(`DB2 CONNECTED`)
})();

( (name) => {
    // simple iife or unnamed iife
    console.log(`DB3 CONNECTED ${name}`)
})('anish')