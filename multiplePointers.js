// Implement a function called countUniqueValues, which accepts
// a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always
// be sorted.
// Class solution was to use 2 pointers and only move from the left , inserting the found number inside the array, because there's no rule that says we can't alter the array.

// Problem Solving
// 1. Find the number of unique items in an array
// 2. Inputs, the array
// 3. Output, count of unique items
// 4. I have enough to solve

countUniqueValues = ( array ) => {
    if( array.length === 0 ) {
        return 0;
    }
    var i = 0;
    var j = 1;

    while( j < array.length ) {
        // If the value at the index is not = to zero, move j forward
        if( array[i] + array[j] !== 0 ) {
            array.splice( j, 1 );
            array.splice( j, 0, array[i] );
            j++;
// @TODO Continue here using class example.
    } else {
        i++;
        }
    }

    return i;

}

console.info( countUniqueValues( [1, 1, 1, 1, 1, 2] ) );
console.info( countUniqueValues( [1, 1, 1, 1, 1, 2, 3, 5] ) );
