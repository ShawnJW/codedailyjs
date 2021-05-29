function maxSubarraySum(arr, num) {
  // If num is bigger than the length of the array
  if ( num > arr.length){
    return null;
  }
  var max = -Infinity;
  // Loop to allow the window to start & stop at appropriate index
  for (let i = 0; i < arr.length - num + 1; i ++){
    // Store number each time
    temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    console.log( temp, max );
  }
  return max;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)

// Solution is not good for long arrays, very inefficient. Big 0^2,
// because of nested loops
