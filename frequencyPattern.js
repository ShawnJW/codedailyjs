// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared
// in the second array.  The frequency of values must be the same

function same ( arr1, arr2 ) {
    if( arr1.length !== arr2.length ){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for( let val of arr1 ) {
        frequencyCounter1[val] = ( frequencyCounter1[val] || 0 ) + 1
    }

    for( let val of arr2 ) {
        frequencyCounter2[val] = ( frequencyCounter2[val] || 0 ) + 1
    }

    console.info( frequencyCounter1 );
    console.info( frequencyCounter2 );
    for( let key in frequencyCounter1 ) {
        if( !(key ** 2 in frequencyCounter2 ) ) {
            return false
        }
        if( frequencyCounter2[key ** 2] !== frequencyCounter1[key] ) {
            return false
        }
    }

    return true
}

// console.info( same([1,2,3,2,5], [9,1,4,4,11] ) );

/**
 * Determine if two strings are an anagram
 * Big0 = O(n)
 * @param  string1, string2
 * @return boolean
 */
validAnagram = ( str1, str2 ) => {
    // Error checks: O(1)
    if( str1.length !== str2.length ) {
        console.info("Error Check");
        return false;
    }

    const lookup = {};
    // O(n)
    for( var i = 0; i < str1.length; i ++ ) {
        let letter = str1[i];
        // Check if letter exist, if yes increment count, else set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;

    }

    // O(n)
    for( var i = 0; i < str2.length; i ++ ) {
        let letter = str2[i];
        if( !lookup[letter] ) {
           return false;
        }  else {
           lookup[letter] -= 1;
        }
    }
        return true;
}

// console.info( validAnagram( 'anagram', 'nagaram' ) );

/**
 * Find out if the two numbers have the same frequency of digits
 * Big0 = O(n)
 * @param  num1, num2
 * @return boolean
 * Steps: 1. Handle Errors, 2. Define structure to store the count of digits in numbers, 3. Split numbers into array 4. 2 individual Loops to count digits from the 2 numbers, using an array of newly created count object 5. Loop to compare keys and counts and return boolean, 6. Final return
 */

sameFrequency = ( num1, num2 ) => {

    if( `${num1}`.length !== `${num2}`.length ) return false

    let frequencyCounter1 = []
    let frequencyCounter2 = []

    // Split Number into individual strings representing the number

    splitNum1 = num1.toString();
    splitNum2 = num2.toString();

    for ( var i = 0, len = splitNum1.length; i < len; i += 1 ) {
        // Check if array has an object and is not the first iteration, so we know whether we can use and iterator for the object, i.e. forEach loop.
        // If it is run continue to next iteration, because...
        // So you know that there are no objects in the array
        // Else, add the object to the array
        // if( frequencyCounter1.some( obj => obj.hasOwnProperty(splitNum1.charAt(i) ) ) && i > 0 ) {
        //
        //     // Skip to next iteration
        //   continue;
        // }

        if ( frequencyCounter1.length == 0 ) {
            frequencyCounter1.push( {[+splitNum1.charAt(i)]: + 1 } );
            continue;
        }
        // Now we know that the array has objects so...
        // We can check the keys and update values of object with matching key
       frequencyCounter1.forEach( ( item ) => {
           if( splitNum1.charAt(i) in item ) {
                  item.value += 1;
           }
       });

        frequencyCounter1.push( {[+splitNum1.charAt(i)]: + 1 } );


       // NOTE: is this adding a 1 each time or replacing the value?  Possible issue
        // ISSUE FOUND:  This creates a new object even if letter is a duplicate
        // // FIX: check if charAt already exist, update matching key value
        // if( frequencyCounter1[splitNum1.charAt(i)] === 0 || undefined ) {
        //     let whatThis = this;
        //     frequencyCounter1.push( {[+splitNum1.charAt(i)]: + 1 } );
        // } else {
        //     // Update current Object value
        //     frequencyCounter1.set( splitNum1.charAt(i) );
        // }
    }

    for ( var i = 0, len = splitNum2.length; i < len; i += 1 ) {
       // NOTE: is this adding a 1 each time or replacing the value? Possible issue
        frequencyCounter1.push( {[+splitNum2.charAt(i)]: + 1 } );
    }

    // The for of loop loops over an array
    // The number does not add 1, refactor
    // Update: num1 is not an array, nor is frequencyCounter1, this loop is invalid
    // What Type of Loop if any is needed, what do we need to do next, does frequencyCounter2 need to be an object?
    // for( const val of frequencyCounter1 ) num1.val = ( num1[val] || 0 ) + 1
    // for( const val of num2 ) num2.val = ( num2[val] || 0 ) + 1

    // Compare indices of two arrays

    // frequencyCounter1.forEach( function ( item, index ) {
    //     console.info( `${item, index}`);
    //
    //     if( index !== num2[key] ) {
    //         return false;
    //     }
    // });

    return true
}

console.info( sameFrequency( 334, 141 ) )