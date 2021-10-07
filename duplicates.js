// Implement a function called countUniqueValues, which accepts
// a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always
// be sorted.
// @TODO FINISH THIS PROBLEM

countUniqueValues = ( array ) => {
    if( array.length === 0 ) {
        return 0;
    }
    var i = 0;

    for( var j = 1; j < array.length; j++ ) {
        if( array[i] !== array[j] ) {
            i++;
            console.info('i' + array[i]);
            console.info('j' + array[j]);
            // Set the index
            array[i] = array[j]
        }
    }

    return i;

}
//
// console.info( countUniqueValues( [1, 1, 1, 1, 1, 2] ) );
// console.info( countUniqueValues( [1, 1, 1, 1, 1, 2, 3, 5] ) );


//Problem Solving
// Find duplicated arguments in arguments passed to function.
// Inputs, variable arguments
// Question: Are mixed types allowed, i.e. strings & numbers
// Output boolean
// I have enought info to solve


/**
 * Check whether there are any duplicates in the arguments ( variable number of arguments )
 * BigO  = O(n)  Search algorithm, does not increase time as n grows
 * Frequency Method
 *
 * @param arg1
 * @param arg2
 * @returns {string}
 */

function areThereDuplicates(  ...theArgs ) {
    if ( theArgs.length < 0 ) return false;

    // theArgs.forEach( e = e => console.info(e) ) ;
    var i = 0;
    var s = 0;

     // Loop for numbers Set j to index 1 so as to be able to compare two indexes
    for (let j = 1; j < theArgs.length; j++) {
        if ( theArgs[i] !== theArgs[j] && typeof theArgs[i] !== "string") {
            //set the index so that we can move the pointer and continue at j
            theArgs[i] = theArgs[j];
        }  else {
            i++;
        }
    }
    // Loop for letters
    for (let j = 1; j < theArgs.length; j++) {
        if ( theArgs[s] !== theArgs[j] && typeof theArgs[s] == "string") {
            //Increase the index for string values
            theArgs[s]++;
            theArgs[j]++;
        }  else {
            s++;
        }
    }
    if ( i == 0 || s == 0) {return false;} else {return true;}
}
console.info( areThereDuplicates( 1, 2, 3 ) )
console.info( areThereDuplicates( 1, 2, 2 ) )
console.info( areThereDuplicates( "a", "b", "c", "a" ) )


// Course Solution
//areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
        if(collection[key] > 1) return true
    }
    return false;
}
//areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
        if(args[start] === args[next]){
            return true
        }
        start++
        next++
    }
    return false
}
//areThereDuplicates One Liner Solution
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}