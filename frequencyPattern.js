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
const equalArrays = ( arr1, arr2 ) => {
// If the arrays are different length we an eliminate immediately
    if( arr1.length !== arr2.length ) {
        return false;
    } else if ( arr1.every(( obj, index ) => equalObjs( obj, arr2[index] ) ) ) {
        return true;
    } else {
        return false;
    }
}

// console.info( equalArrays( arr1, arr2 ) );
/**
 * Determine if two objects are equal
 * @param  obj1, obj2
 * @return boolean
 */
// const obj1 = { name: 'John', age: 33};
// const obj2 = { age: 33, name: 'John' };
// const obj3 = { name: 'John', age: 45 };

const equalObjs = ( obj1, obj2 ) => {
    let keyExist = false;
    for ( const [key, value] of Object.entries(obj1) ) {
        // Search each key in reference object and attach a callback function to
        // compare the two object keys
        if( Object.keys(obj2).some( ( e ) => e == key ) ) {
            keyExist = true;
        }
    }

    return keyExist;

}


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

    var num1Split = num1.toString();
    var num2Split = num2.toString();


    // Convert to Array and Sort Numbers
    const sorted1 = Array.from( num1Split ).sort(( a, b ) => a.localeCompare(b) );
    const sorted2 = Array.from( num2Split ).sort(( a, b ) => a.localeCompare(b) );

    // Convert back to string and remove commas
    var num1Split = sorted1.toString().replace( /,/g, '' );
    var num2Split = sorted2.toString().replace( /,/g, '' );


    for ( let i = 0, len = num1Split.length; i < len; i += 1 ) {
        let char1Exist = frequencyCounter1.find( theChar => Object.keys(theChar) );

        if ( char1Exist !== undefined && Object.keys(char1Exist) === num1Split.charAt(i) ) {
            char1Exist++;
        } else {
           var obj = { [+num1Split.charAt( i )]: +1 };

            frequencyCounter1.push( obj );
        }
    }

    for ( let i = 0, len = num2Split.length; i < len; i += 1 ) {
        let char2Exist = frequencyCounter2.find( theChar => Object.keys(theChar) );

        if ( char2Exist !== undefined && Object.keys(char2Exist) === num2Split.charAt(i) ) {
            char2Exist++;
        } else {
           var  obj = { [+num2Split.charAt( i )]: +1 };
            frequencyCounter2.push( obj );
        }
    }

    const equalObjs = ( obj1, obj2 ) =>
       // if first condition is truthy, expression to be excuted, if falsey execute objq === obj2;
       typeof obj1 === 'object' && Object.keys( obj1 ).length > 0 ? Object.keys( obj1 ).length === Object.keys( obj2 ).length && Object.keys( obj1 ).every( p => equalObjs( obj1[p], obj2[p] ) ) : obj1 === obj2;

    // function runs on each sorted object
    const equalArrays = ( arr1, arr2) =>
       arr1.length === arr2.length && arr1.every( ( obj, index ) => equalObjs( obj, arr2[index] ) );



    return equalArrays( frequencyCounter1, frequencyCounter2 );
}
// console.info( sameFrequency( 14,34 ) )
// console.info( sameFrequency( 182,281 ) )
// console.info( sameFrequency( 22,222 ) )
// console.info( sameFrequency( 3589578, 5879385 ) )


/** https://stackoverflow.com/questions/27030/comparing-arrays-of-objects-in-javascript/67489928#67489928
 *
 * @param num1
 * @param num2
 * @returns {boolean}
 */

function sameFrequencyAlt( num1, num2 ) {
    if ( `${num1}`.length !== `${num2}`.length ) return false;


    var frequencyCounter1 = [];
    var frequencyCounter2 = [];

    var num1Split = num1.toString();
    var num2Split = num2.toString();
    //
    //
    // // Sort Numbers
    // const sorted1 = Array.from( num1Split ).sort(( a, b ) => a.localeCompare(b) );
    // const sorted2 = Array.from( num2Split ).sort(( a, b ) => a.localeCompare(b) );

    //
    // var num1Split = sorted1.toString().replace( /,/g, '' );
    // var num2Split = sorted2.toString().replace( /,/g, '' );
    


    for ( let i = 0, len = num1Split.length; i < len; i += 1 ) {
        let char1Exist = frequencyCounter1.find( theChar => Object.keys(theChar) );

        if ( char1Exist !== undefined && Object.keys(char1Exist) === num1Split.charAt(i) ) {
            char1Exist++;
        } else {
            var obj = { [+num1Split.charAt( i )]: +1 };

            frequencyCounter1.push( obj );
        }
    }

    for ( let i = 0, len = num2Split.length; i < len; i += 1 ) {
        let char2Exist = frequencyCounter2.find( theChar => Object.keys(theChar) );

        if ( char2Exist !== undefined && Object.keys(char2Exist) === num2Split.charAt(i) ) {
            char2Exist++;
        } else {
            var  obj = { [+num2Split.charAt( i )]: +1 };
            frequencyCounter2.push( obj );
        }
    }

    const equalObjs = ( obj1, obj2 ) => {
        let keyExist = false;
        for ( const [key, value] of Object.entries(obj1) ) {
            // Search each key in reference object and attach a callback function to
            // compare the two object keys
            if( Object.keys(obj2).some( ( e ) => e == key ) ) {
                keyExist = true;
            }
        }

        return keyExist;

    }
    const equalArrays = ( arr1, arr2 ) => {

// If the arrays are different length we an eliminate immediately
        if( arr1.length !== arr2.length ) {
            return false;
        } else if ( arr1.every(( obj, index ) => equalObjs( obj, arr2[index] ) ) ) {
            return true;
        } else {
            return false;
        }
    }

    var frequencyCounter1 = frequencyCounter1.sort(( a, b ) => {
        var fa = Object.keys(a);
        var fb = Object.keys(b);

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });

    var frequencyCounter2 = frequencyCounter2.sort(( a, b ) => {
        var fa = Object.keys(a);
        var fb = Object.keys(b);

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    
    return equalArrays( frequencyCounter1, frequencyCounter2 );
}
// console.info( sameFrequencyAlt( 14,34 ) )
// console.info( sameFrequencyAlt( 182,281 ) )
// console.info( sameFrequencyAlt( 22,222 ) )
// console.info( sameFrequencyAlt( 3589578, 5879385 ) )


