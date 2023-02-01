/* 
    ? Logical Operators NOT AND OR
    * OR Operator ( || )
        * true if one of the conditions is true
        * ex: I will be happy if I go to the movies or eat dinner
        * (dinner & movies = true)
        * (no dinner & movies = true)
        * (dinner & no movie = true)
        * (no dinner & no movie = false)
    * AND Operator ( && )
        * true if both conditions are true
        * ex: I will be happy if I got to the movies and eat dinner
        * (dinner and movies = true)
        * (no dinner and movies = false)
        * (dinner and no movies = false)
        * (no dinner and no movies = false)
    * NOT operator ( ! )
        * flips the logical expression
*/

// NOT Example

lightSwitch = false

if (!lightSwitch) {
    // (lightSwitch == false)
    // (!lightSwitch)
    // (lightSwitch != true)
    // All of the above mean the same thing
    console.log("light switch is off")
}

// AND Example

let home = true
lightSwitch = false

if (home && lightSwitch) {
    // (home == true && lightSwitch == true)
    console.log("You're home and the lights are on")
} else if (home && !lightSwitch) {
    // (home == true && lightSwitch == false)
    console.log("You forgot to turn on the lights")
} else if (!home && lightSwitch) {
    // (home == false && lightSwitch == true)
    console.log("You forgot to turn off the lights")
} else {
    console.log("Home is empty and lights are off")
}


// OR example


if (!home || !lightSwitch) {
    console.log(`Home value is: ${home} and Light Switch value is: ${lightSwitch}`)
}

/* 
    ? Challenge

    * Create a condition that will check the user's age and insurance status:
    * If the user is under 16, they can't drive
    * If the user is 16 thru 18, and they're male their insurance is highest
    * If the user is 16 thru 18, and they're female their insurance is high
    * If the user is older than 18 but less than 21 and they're male, their insurance is average
    * If the user is older than 18 but less than 21 and they're female, their insurance is below average
    * If they're over 21 regardless whether male or female, the insurance is low.
*/
/*
let age = 21
let gender = "male"
if (age < 16){
    console.log("No driving for you")
} else if (age >== 16 && age < 18 && gender == "male") {
    console.log("Highest Insurance Rate")
} else if (age <== 16 && age <= 18 && gender == "female") {
    console.log("High Insurance")
} else if (age >== 18 && age < 21 && gender == "male") {
    console.log("Average Insurance rate")
} else if (age >== 18 && age < 21 && gender == "female") {
    console.log("Below Average Insurance Rate")
} else (age >= 21);
    console.log("Low Insurance Rate")
*/

   

  // syntax ternary
  let ignition = true
// true for "on" false for "off"

let ignitionCount = 0

if (ignition) {
    console.log("The car is on")
    ignitionCount = ignitionCount + 1
    console.log(`Ignition count: ${ignitionCount}`)
} else {
    console.log("The car is off")
}

ignition ? console.log("Car is on") : console.log("Car is off")

// Chaining Ternaries

let season = 2

if (season == 1) {
    console.log("spring")
} else if (season == 2) {
    console.log("summer")
} else if (season == 3) {
    console.log("autumn")
} else if (season == 4) {
    console.log("winter")
} else {
    console.log(`${season} is not an appropriate input`)
}

season == 1 ? console.log("spring")
            : season == 2 ? console.log("summer")
            : season == 3 ? console.log("autumn")
            : season == 4 ? console.log("winter")
            : null

// ! If you do not have an else statement, you must use a null.


/* 
    Ternary Syntax:

    conditional ? code block if true : code block if false

    conditional ? code block if true
                : else if statement ? code block if true
                : else if statement ? code block if true
                : else statement OR null

*/

/* 

*/let age = 21;
age < 18 ? console.log("you are still a teenager")
        : age < 21 ? console.log("you can travel but cannot drink")
        : age >= 21 ? console.log("you can drink alcohol")
        : null 


let uprightInstructor = "Matt"

switch(uprightInstructor) {
    case "paul":
        console.log(`${uprightInstuctor} is lead SD instructor`)
        break
    case "benny":
        console.log(`${uprightInstructor} is operations instructor`)
        break
    case "Matt":
        console.log(`${uprightInstructor} is a manager`)
        break
     default:
        console.log(`${uprightInstructor} may not work here`)           
}

