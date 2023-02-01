 // ? JavaScript

/*
    JS was founded in 1996 by Brandon Eich
    * client-side language (runs in the browser)
    * interpreted language, not compiled
    * first-class-function - functions are treated like any other variable
    * functional language
    * object-oriented language
    * prototype-based
    * imperative
    * ECMAScript - organization setting language standards
*/

// ? Comments

/* 
    * Blocks of code that are not being interpreted
    * Denoted by // for single-line
    * Denoted by /* for multi-line
    * Comments are read but not executed
    * As students, it helps us with note taking
    * As devs, it documents our code making it more maintainable
*/

// ? Console object

/* 
    * Gives us access ot the browser or node's debugging console.
    * Allows developer to view output from their program
*/

2 + 2 // runs but doesn't show in the console
console.log(2 + 2) // shows in the console

// ? Data Types

/* 
    ? JS Data Types:
        Primitive
            * string
            * number
            * boolean
            * null
            * undefined
            * Not a Number (NaN)
        Reference
            * array
            * object
*/
// Strings

/* 
    * Primitive data type representing characters (text)
    * Enclosed ' ', " ", or ` `
    
    Examples:
*/

console.log("This is a text")
console.log('This is also a text')
console.log(`Text using string interpolation backticks`)

// This is also a string representation of a number
console.log("2023")

// We can add (concatenate) strings
console.log("I'm Paul" + " and I'm 26 years old.")

// Strings are indexed starting from zero (0)
// index_value goes between [ ]
// ! Strings are immutable
console.log("Porschedoppelkupplungsgetriebe"[5])


/* 
    ? String Interpolation (` `)
    * A process of including space for an expression
*/

// TODO: we'll get to it later

/* 
    ? Checking data types using typeof operator
*/

console.log(typeof "1990") // returns string

// Multi-line strings
// Done using escape character "\n"

console.log("Michael Morris \n 123 Main St \n 312 555 0808")


console.log(1);
console.log("1")
console.log(3.14)
console.log("string" + "string")

// You have to save the code in order for it to print to the terminal
//

console.log(Boolean(1))
console.log(Boolean(0));
console.log(Boolean(""))
console.log(Boolean(NaN))
console.log(2 == "2")
console.log(3 == "3");


console.log("michael".toLocaleUpperCase())
console.log("michael".slice(0, 4))
console.log(`My name is michael and i am ${30 + 11} years old`)

let someVariable = "1";

if (true) {
    console.log("show me something in the termimal")
}


