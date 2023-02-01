/* 
    ? Switch Challenge

    * Create a grade variable that holds a value (ex: 78)

    * Create a switch statement that checks against the variable.

    * If it's above 89, console log "You got an A"
    * greater than 79 B
    * greater than 66 C
    * greater than 59 D
    * below 59 F
    * default statement of "Input is not a grade"
    
    If you cannot create a switch, try an if/else or a ternary first
*/
// let uprightInstructor = "Matt"

// switch(uprightInstructor) {
//     case "paul":
//         console.log(`${uprightInstuctor} is lead SD instructor`)
//         break
//     case "benny":
//         console.log(`${uprightInstructor} is operations instructor`)
//         break
//     case "Matt":
//         console.log(`${uprightInstructor} is a manager`)
//         break
//      default:
//         console.log(`${uprightInstructor} may not work here`)           
// }
let grade = 58;

switch(true) {
    case grade >= 90:
    console.log("you got an A")
    break
    case grade >= 80:
    console.log("you got a B")
    break
    case grade >= 67:
    console.log("you got a C")
    case grade >= 59:
    console.log("you got a D")
    break
    case grade < 59:
    console.log("F")
    break
    default:
        console.log("NaN")
    
    
}

