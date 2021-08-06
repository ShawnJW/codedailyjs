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
 * Determine if two arrays are equal
 * @param  arr1, arr2
 * @return boolean
 */
// const equalArrays = ( arr1, arr2 ) => {
// // If the arrays are different length we an eliminate immediately
//     if( arr1.length !== arr2.length ) {
//         return false;
//     } else if ( arr1.every(( obj, index ) => equalObjs( obj, arr2[index] ) ) ) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.info( equalArrays( arr1, arr2 ) );
/**
 * Determine if two objects are equal
 * @param  obj1, obj2
 * @return boolean
 */
const obj1 = { name: 'John', age: 33};
const obj2 = { age: 33, name: 'John' };
const obj3 = { name: 'John', age: 45 };

// const equalObjs = ( obj1, obj2 ) => {
//     let keyExist = false;
//     for ( const [key, value] of Object.entries(obj1) ) {
//         // Search each key in reference object and attach a callback function to
//         // compare the two object keys
//         if( Object.keys(obj2).some( ( e ) => e == key ) ) {
//             keyExist = true;
//         }
//     }
//
//     return keyExist;
//
// }


// console.info( equalObjs( obj1, obj2 ) );

/**
 * Find out if the two numbers have the same frequency of digits
 * Big0 = O(n)
 * @param  num1, num2
 * @return boolean
 * Steps: 1. Handle Errors, 2. Define structure to store the count of digits in numbers, 3. Split numbers into array 4. 2 individual Loops to count digits from the 2 numbers, using an array of newly created count object 5. Loop to compare keys and counts and return boolean, 6. Final return
 */

function sameFrequency( num1, num2 ) {
    if ( `${num1}`.length !== `${num2}`.length ) return false;

    var frequencyCounter1 = [];
    var frequencyCounter2 = [];

    let num1Split = num1.toString();
    let num2Split = num2.toString();

    for ( let i = 0, len = num1Split.length; i < len; i += 1 ) {
        let char1Exist = frequencyCounter1.find( theChar => Object.keys(theChar) );

        if ( char1Exist !== undefined && Object.keys(char1Exist) === num1Split.charAt(i) ) {
            char1Exist++;
        } else {
           var obj = { [+num1Split.charAt( i )]: +1 };
            // Object.assign( frequencyCounter1, { [+num1Split.charAt( i )]: +1 } );
            // Object.assign( { frequencyCounter1: { } }, { [+num1Split.charAt( i )]: +1 } );
            frequencyCounter1.push( obj );
        }
    }

    for ( let i = 0, len = num2Split.length; i < len; i += 1 ) {
        let char2Exist = frequencyCounter2.find( theChar => Object.keys(theChar) );

        if ( char2Exist !== undefined && Object.keys(char2Exist) === num2Split.charAt(i) ) {
            char2Exist++;
        } else {
           var  obj = { [+num2Split.charAt( i )]: +1 };
            // Object.assign( { frequencyCounter2: { } }, { [+num2Split.charAt( i )]: +1 } );
            frequencyCounter2.push( obj );
        }
    }

    // @TODO Continue refactoring with equalobjs method, currently equalobjs returns true always, does not seem to be checking value of obj2[e], e = the full object, i.e. {3:1}, instead of the property or value
    const equalObjs = ( obj1, obj2 ) => {
        let keyExist = false;
        // for ( let value of Object.values(obj1) ) {
        //     // Search each key in reference object and attach a callback function to compare the two object keys
        //     if( Object.values(obj2).indexOf(obj1) == value ) {
        //         keyExist = true;
        //     }
     if( Object.values( obj1 ).every( e => obj1[e] === obj2[e] ) ) {
         keyExist = true;

     }

        return keyExist;

    }
    // }

    // const equalArrays = ( arr1, arr2) => {
    //     if( arr1.length !== arr2.length ) {
    //         return false;
    //     } else if ( arr1.every( ( obj, index ) => equalObjs( obj, arr2[index] ) ) ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    return equalObjs( frequencyCounter1, frequencyCounter2 );
}
console.info( sameFrequency( 182,281 ) )
// console.info( sameFrequency( 3589578, 5879385 ) )
// @TODO Continue debugging, look back into using the equal array function referencing https://stackoverflow.com/questions/27030/comparing-arrays-of-objects-in-javascript/67489928#67489928
