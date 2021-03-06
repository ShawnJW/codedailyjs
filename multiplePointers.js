// Implement a function called countUniqueValues, which accepts
// a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always
// be sorted.
//
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
            // Set the value at index i so we can move the pointer and continue at j, this changes the value of array[i]
            array[i] = array[j]
        }
    }

    return i + 1;

}

// console.info( countUniqueValues( [1, 1, 1, 1, 1, 2] ) );
// console.info( countUniqueValues( [1, 1, 1, 1, 1, 2, 3, 5] ) );
// console.info( countUniqueValues( [5, 6, 1, 7, 1, 2, 3, 5] ) );


// Write a function called averagePair.  Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.  There may be more than one pair that matches the average target.
// Bonus Constraints:
// Time: O(n)
// Space: O(1)
// Problem Solving
// From a set of integers, find two integers that equal the given average
// Inputs: sorted array of integers and a target average, an object of integers and an integer
// Outputs: boolean
// NOTE: Only need to identify 1 pair
// Empty object/average = false // Strings = false

const averagePair = (a, b) => {
    // Error checks
    if( arguments !== null || typeof arguments !== "number") {return false;}

    var i = 0;

    for ( var j = 1; j < a.length; j++ ) {
        
    if( a[i] + a[j] || 2 !== b ) {
        i++;
        // Change index of i to move forward, BEWARE: this changes the value of i
        // a[i] = a[j];
    }    else {
        return true;
    }
    }
    return false;

}

console.info(averagePair([1, 2, 3], 2.5) ) //true
console.info(averagePair([1,3,3,5,6,7, 10, 12, 19], 8) ) //true
console.info(averagePair([-1, 0, 3, 4, 5, 6], 4.1)  )//false
console.info(averagePair([], 4) ) // false