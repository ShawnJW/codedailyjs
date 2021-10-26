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

// Steps:
// 1. Error Checks
// 2. Create Pointers
// 3. Add pointers together and check if the sum matches the given ave
// 4. Move pointers if no match
// 5. Return first matched pair.


const averagePair = ( arr, ave ) => {
    // Error checks
    if ( arguments == null || typeof arguments == "number" ) {
        return false;
    }

    var i = 0;

    for ( let j = 1; j < arr.length; j++ ) {
        // Reduce method to Sum total and get average. https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers

        //     if( arr.reduce((a,b) => a + b, 0) / arr.length !== ave ) {
        //     i++;
        //     // Change index of i to move forward, BEWARE: this changes the value of i
        //     // a[i] = a[j];
        // }    else {
        //     return true;
        // }

        for ( let j = 1; j < arr.length; j++ ) {
            if ( i + j / 2 !== ave ) {
                i++;
            } else {
                return true;
            }
        }
    }
    return false;

}

console.info( averagePair( [1, 2, 3], 2.5 ) ) //true
console.info( averagePair( [1, 3, 3, 5, 6, 7, 10, 12, 19], 8 ) ) //true
console.info( averagePair( [-1, 0, 3, 4, 5, 6], 4.1 ) )//false
console.info( averagePair( [], 4 ) ) // false