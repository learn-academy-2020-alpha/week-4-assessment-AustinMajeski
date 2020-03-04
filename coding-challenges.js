// ASSESSMENT 4: JavaScript Coding Practical Questions


/*   Austin Majeski   */


///***********************************************************///
//             Function used to format logging                 //
///***********************************************************///

/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const LINE = "_____________________________________________________"
const SPACE = "    "
const ESC = String.fromCharCode(033)

const BLUE_BACKGROUND = ""//ESC+"[48;5;217m"
const WHITE_BACKGROUND = ESC+"[48;5;15m"
const BLACK_BACKGROUND = ESC+"[48;5;0m"

const WHITE_TEXT = ""//ESC+"[38;5;15m"
const GREEN_TEXT = ESC+"[38;5;2m"

const FORMAT_RESET = ESC + "[0m"

function log() {
    console.log(`\n${BLUE_BACKGROUND} ${WHITE_BACKGROUND}${LINE}${FORMAT_RESET}${BLUE_BACKGROUND}\n\n${SPACE}${arguments[0]}\n ${LINE}\n\n`)
    let Args = Array.from(arguments).splice(1)
    Args.forEach(out => {
        if (Array.isArray(out)) {
            let outputArrayText = SPACE + "[ "
            out.forEach((v, i) => {
                if (i < out.length - 1) { outputArrayText += `${v}, ` }
                else { outputArrayText += v }
            })
            console.log(outputArrayText += " ]")
        }
        else { console.log(SPACE + out) }
    })
    console.log(`\n ${LINE}\n ${LINE}\n\n\n`)
}
console.log("\n" + BLUE_BACKGROUND + WHITE_TEXT + "\n\n")
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -






///***********************************************************///
//                    Assignment Start                         //
///***********************************************************///




//  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /

// --------------------1)   Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

//  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]



const removeAndShuffle = arrIn => {

    return (
                arrIn.length === 0 ?
                "The array is empty."
                :
                arrIn.slice(1).sort( () => Math.floor( Math.random() * 3 ) - 1 )

                 // ' .sort() ' here will get a random number between -1 and 1, which will tell the array how to sort its items.
                 // This is similar to how numbers can be sorted in an array, but instead of comparing two numbers in the array, it will work off of a random number.
           ) 
}



/// - - - - - - - - - - - - - - - -
/// - - - - - - - - - - - - - - - -

//      To create a list of outcomes that shows this function is working as it should,
//      I list some outcomes in succession to each other.

//  - Here, I use the array returned from the function to put into the function again.


//    Round One
let alteredArr_1 = removeAndShuffle(  collections  )      //   <<  Taking in ' collections '   [ ! ]
let alteredArr_2 = removeAndShuffle( alteredArr_1 )
let alteredArr_3 = removeAndShuffle( alteredArr_2 )
let alteredArr_4 = removeAndShuffle( alteredArr_3 )
let alteredArr_5 = removeAndShuffle( alteredArr_4 )   //  The array given to ' removeAndShuffle ' is NOT empty, but it will return an empty array.
let alteredArr_6 = removeAndShuffle( alteredArr_5 )   //  Here, the array given to ' removeAndShuffle ' IS EMPTY, so it will return: " The array is empty. "

//    Round Two
let alteredArr__1 = removeAndShuffle(  collections  )      //   <<  Taking in ' collections '   [ ! ]
let alteredArr__2 = removeAndShuffle( alteredArr__1 )
let alteredArr__3 = removeAndShuffle( alteredArr__2 )
let alteredArr__4 = removeAndShuffle( alteredArr__3 )
let alteredArr__5 = removeAndShuffle( alteredArr__4 )
let alteredArr__6 = removeAndShuffle( alteredArr__5 )


/// - - - - - - - - - - - - - - - -
/// - - - - - - - - - - - - - - - -


log(    "Removed First Item & Shuffled Arrays",

        "Original Array:", "",
        collections,
        "",
        "_____________________________________",
        "_____________________________________",
        "", "",
        "        Altered Back-to-Back",
        "", "",
        `${BLACK_BACKGROUND}${GREEN_TEXT}  < Round One >  ${FORMAT_RESET}`,
        //" < Round One >",
        "-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-",
        alteredArr_1,
        alteredArr_2,
        alteredArr_3,
        alteredArr_4,
        alteredArr_5,
        alteredArr_6,
        "-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-",
        "", "",
        `${BLACK_BACKGROUND}${GREEN_TEXT}  < Round Two >  ${FORMAT_RESET}`,
        //" < Round Two >",
        "-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-",
        alteredArr__1,
        alteredArr__2,
        alteredArr__3,
        alteredArr__4,
        alteredArr__5,
        alteredArr__6,
        "-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-"

    )

/// - - - - - - - - - - - - - - - -
/// - - - - - - - - - - - - - - - -







//  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /

// --------------------2)   Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

//  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /

var cubeAndSum1 = [2, 3, 4]     // Expected output: 99
var cubeAndSum2 = [0, 5, 10]    // Expected output: 1125
var cubeAndSum3 = [4, 7, 8]     // Expected output: 919     >>     My own example


const cubeAndSum = numArrIn => {

    return numArrIn.reduce( (accumulator, currentValue) => accumulator + currentValue**3, 0 )
    // the first element in the array would have been skipped and used as the ' initial value ' if I did not specify to use ' 0 ' as that value.
}



/// - - - - - - - - - - - - - - - -

log(    "Cube All Numbers in an Array, Then Add Them Up",
        
        `[${cubeAndSum1}]   >>   ${cubeAndSum( cubeAndSum1 )}`,
        `[${cubeAndSum2}]  >>   ${cubeAndSum( cubeAndSum2 )}`,
        `[${cubeAndSum3}]   >>   ${cubeAndSum( cubeAndSum3 )}            (my own example)`

    )

/// - - - - - - - - - - - - - - - -





//  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /

// --------------------3)   Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

//  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /

var nums1 = [3, 56, 90, -8, 0, 23, 6]   // Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]     // Expected output: [-59, 109]



const getMinAndMax = numArrIn => {
    return numArrIn.sort( (a,b) => a-b ).filter( (v,i,arr) => i<1 || i===arr.length-1 )
}



/// - - - - - - - - - - - - - - - -

log(    "Min & Max of a Number Array",

        getMinAndMax( nums1 ),
        getMinAndMax( nums2 )
    )

/// - - - - - - - - - - - - - - - -







//  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /

// --------------------4)   Create a function that takes in a string and returns a string with every other letter capitalized.

//  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /

var testString1 = "albatross"   // Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky" // Expected output: "jAbBeRwOcKy"



const capitalizeEveryOtherLetter = strIn => {
    return Array.from( strIn ).map( (c,i) => { if (i%2===1) return c.toUpperCase(); return c } ).join("")
}



/// - - - - - - - - - - - - - - - -

log("Capitalize Every Other Letter",

        `${testString1}     >>   ${capitalizeEveryOtherLetter( testString1 )}`,
        `${testString2}   >>   ${capitalizeEveryOtherLetter( testString2 )}`
    )

/// - - - - - - - - - - - - - - - -







//  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /

// --------------------5)   Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.

//  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

//   -->   console.log(...arr1)



const joinArraysAndRemoveDuplicates = (a1, a2, a3, i=0) => {

    // Set Up
    //      >   Makes sure there is at least 1 array to use.
    //      >   A double equal sign is used so 'null' or 'undefined' can be used interchangeably
    if (a3 == undefined){  a3 = a1.concat(a2)  }

    // Getting the indexes of the first and last instance of an item.
    let [ a3_FIRST, a3_LAST ]  =  [ a3.indexOf( a3[i] ), a3.lastIndexOf( a3[i] ) ]

    // Removing the last duplicate of an item
    if ( a3_FIRST !== a3_LAST ){
        a3.splice(a3_LAST,1)
        joinArraysAndRemoveDuplicates( null, null, a3, i )
    }
    else if ( i < a3.length ){
        joinArraysAndRemoveDuplicates( null, null, a3, ++i )
    }


    return a3
}



/// - - - - - - - - - - - - - - - -

log(    "Joining Arrays & Removing Duplicates",

        "Original Arrays Combined:", "",
        arr1.concat(arr2),
        "",
        "___________________________",
        "", "",
        "[ 3, 7, 10, 5, 4, 8, 2, 1 ]  :  Expected output",
        "",
        `${BLACK_BACKGROUND}${GREEN_TEXT}  Output:  ${FORMAT_RESET}`,
        joinArraysAndRemoveDuplicates( arr1, arr2 )
    )

/// - - - - - - - - - - - - - - - -




/* //\\--==*==--//\\--==*==--//\\--==*==--//\\--==*==--//\\--==*==--//\\--==*==--//\\--==*==--//\\--==*==--//\\ */



/* \\//--==*==--\\//--==*==--\\//--==*==--\\//--==*==--\\//--==*==--\\//--==*==--\\//--==*==--\\//--==*==--\\// */






/**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**/









/**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**/


/*
function  sum( a, b ){
    return a + b
}

console.log( sum(...arr1) )
*/




//   testing 'null' and 'undefined' to be interchangeable with double equal sign
/*
B = null
C = undefined

if (C == null) console.log("hrllo")
if (C == undefined) console.log("hrllo")
if (B == null) console.log("hrllo")
if (B == undefined) console.log("hrllo")
*/






console.log(FORMAT_RESET + "\n\n")
/// EOF