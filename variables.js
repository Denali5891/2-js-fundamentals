// ? Variables

/*
Containers that staore data in memory
    * declaration
        *alllows memory space to be reserved
        * Starts with let, var, const
        * can not be started with number or characters other then $ or _
        * if no value is assigned, its undefined
    * initialization
        * assignment of data value
        * can be any value or data type (str, int, ass, etc)
        * can be reassigned except for const 
*/

// Variable Declaration

let firstName;
console.log(firstName);

let lastName = "morris";

firstName = "michael";

let fullName = `${firstName} ${lastName}`;
console.log(fullName);

let address = "533 windy hill";
// let is a "keyword"
// address is a variabled
// = is the assignment operator
// "string" variable initialization
//
console.log(address);

var age = 41;
console.log(age)
// 
function poetryBot(){
let myName = ("what is your name?");
console.log(myName);
myName = "michael";
console.log(myName);
let favorateAnimal = "what is your favorate animal"
console.log(favorateAnimal);
favorateAnimal = "Dog";
console.log(favorateAnimal)
let answer = (myName.length + favorateAnimal.length)
console.log(answer);
if (answer % 2 === 0) {
    return  "this is a string";
} else {
    return "not a string"
}
}
poetryBot()


for (let i = 0; i <= 41; i++) {
    console.log(i)
}

var age = 41
console.log(age)

/*      
        ? Coding Practices for variables
        * be concise
        *be specific 
        * Utilize camelCase
        * PascalCase
        * nocase
        * or  SCREAMING_CASE
        * skewer-case
*/

let fName = "Michael";
console.log(fName);
let lName = "Morris";
console.log(lName);
let houseNumber = "999";
console.log(houseNumber);
let street = "Back Ally Boulvard";
console.log(street);
let city = "Baghdad"
console.log(city);
let country = "Iraq";
console.log(country)
let code = "03101"
console.log(code)

let combo = `${fName} ${lName} \n ${houseNumber} ${street} \n ${city.toUpperCase()} \n ${country.toUpperCase()} ${code}`

console.log(combo)

let example7 = "string" * false;
console.log(example7)
console.log("java".repeat(10))
console.log("berry".charAt(1))
console.log("banry".includes("ban"));
console.log("banana".endsWith("ana"))
console.log("blueberry".replace("blue", "black"))
console.log("blackberry".toLowerCase())

let value = "blueberry";
let newValue = `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
console.log(newValue)

console.log("double'in single'quotes")
console.log(`template literals or string interpolation`)
console.log(``)