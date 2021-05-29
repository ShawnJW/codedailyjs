// Understand the problem
// 1. Try to restate the problem - Get the max sum of a group of numbers in array
// 2. What are the inputs that go into the problem - array, num to group the
// count, index or [i], maxsum, tempsum
// 3. What are the outputs for the solution - maxsum
// 4. Do I have enough info to solve the problem? yes
// 5. How should I label the important pieces of data - See inputs
//
// Explore Examples
// 1. Edge cases - Account for if the array does not contain enough
// numbers to count in the group.  What if non-numeric numbers are in the array?
// 2. Empty inputs
//
// Break it down
// - Explicitely write out the steps
// 1. Create inputs
// 2. Handle edge cases from the start
// 3. First loop to set the count of tempsum
// 4. Set tempsum to maxsum
// 5. Second loop to slide the window
// 6. Return maxsum

maxSubarraySum = ( array, num ) => {
    let tempSum = 0;
    let maxSum = 0;

    if( num > array.length ) return NULL;

    for ( let i = 0; i < num; i++ ) {
        maxSum += array[i];
    }

    tempSum = maxSum;

    for( let i = num; i < array.length; i++ ) {
        tempSum = tempSum - array[i - num] + array[i];
        maxSum = Math.max( maxSum, tempSum );
    }

    return maxSum;
}

console.log( maxSubarraySum([2,6,9,2,1,8,5,6,3],3) );

// O^n
