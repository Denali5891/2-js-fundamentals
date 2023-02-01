

// ? Loops


    /*
    * allow us to execute a block of code repeatedly until an exit condition has been met
    *
    
    */

// ? for loop

/* 
we st out our loop in a way so we can:
    * see where we are in a loop
    * 
*/

for (let i = 0; i <= 10; i ++){
    console.log(i)
}

// for (let i = 0; ;i ++) {
    // console.log(i) infinte loop because there is no stopping (condition) point for the counter
// }

let spaceHashtag = " # #";
let hashtagSpace = "# # ";

for (let num = 0; num < 8; num ++) {
    if (num % 2 ===0) {
        console.log(spaceHashtag.repeat(4))
    }
}

let longWord = "njdvisonvkljdsnvlkdsnvkldsnv";
console.log(longWord.length)

for (count = 0; count < longWord.length; count = count + 1) {
    console.log(`Index: ${count}), Letter: ${longWord[count]}`)
}

let longerWord = "jkdsfjklcdsnfckldvsncvkldsnvckldsnvkldsnvl";

for (i in longerWord) {
    
    
    console.log(`Iterator: ${i}, Letter: ${longerWord[i]}`)
}

/*
?
* iterator - (ex i) value that is a placeholder for our loop
* 
*/
//  ? for of loops

/*
        Allows us to seek iterable value againist the condition


*/


let longestWord = "konstantynoplitanczykowianeczka"

for (i of longestWord) {
    console.log(i)
}

/* 
    *for-in allows us to loops over items that are not an array
    * for-of only works if an item is indexed like an array or a string

*/


/* 
        ? Challenge

        * using a traditonal for-loop set an index to 2.
        * make a condition where if that number is greater than -100
        * you will be subtracting 4
        * * Console log each iteration
    ?? step can be i++ i-- i = i + 1 or i += 1

*/

for (let count5 = 2; count5 >= -100; count5 = count5 - 4) {
    console.log(count5)
}
 

//      ? Challenge 2


/*
        * loop over an array with for-in or for-of
        * console log each animals respective "sound" ("meow" for cat)
    

*/
// let longerWord = "jkdsfjklcdsnfckldvsncvkldsnvckldsnvkldsnvl";

// for (i in longerWord) {
    
    
//     console.log(`Iterator: ${i}, Letter: ${longerWord[i]}`)
// }


let animalArray = ["pig", "cat", "mouse", "dog", "bird"]

for (i in animalArray){
    

switch(animalArray[i]) {
    case ("pig"):
    console.log("oink")
    break
    case ("cat"):
    console.log("meow")
    break
    case ("mouse"):
    console.log("meep")
    break
    case ("dog"):
    console.log("woof")
    break
    case ("bird"):
    console.log("chirp")
    break
    default:
    console.log("")
}
}

//      ? While


    /*
            * Execuates a statement inside a code block
            * ot does so as long until the while condition evaluates as true
            * 
            * 
    
    */    
let loopCount = 0;
while (loopCount <= 100){
console.log(loopCount)
loopCount = loopCount + 1
}

let carArray = ["honda", "bmw", "maserati", "lata"];

let carCount = 0

while (carCount < carArray.length) {
    console.log(carArray[carCount])
    carCount += 1
}


//      *do while loop

/*
            *executes code in the do section while a condition 
            * remains true

*/
let doCount = 0
do {
    console.log(carArray[doCount])
    doCount = doCount + 1
} while (doCount < carArray.length)


// let lineNumber;

// while (/* some test */) {
// your code here 
// }

function potatoPoem(){
    count = 0
     while(count < 100) {
       console.log(count)
       count = count + 1
       if (count == 8){
         console.log("more")
         } else if (count == 4){
         console.log(`${count}!`)
         } else if (count % 3){
         console.log("im divisible")
         } else {
         
         console.log(count, "potato")
       }   
    for (let count = 0; count < 12; count++){
     count === 12 ? console.log("floor")
     : count === 8 ? console.log("more")
     : count === 4 ? console.log(`${count}!`)
     : console.log(`${count} potato!`)
     
   }
   
   potatoPoem()
   