// Implement a function called countUniqueValues, which accepts
// a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always
// be sorted.

countUniqueValues = ( array ) => {
    if( array.length === 0 ) {
        return 0;
    }
    var i = 0;

    for( var j = 1; j < array.length; j++ ) {
        if( arr[i] !== arr[j] ) {
            i++;
            array[i] = array[j]
        }
    }

}

console.info( countUniqueValues( [1, 1, 1, 1, 1, 2] ) );
