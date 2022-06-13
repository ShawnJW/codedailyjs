/**
 * Function to create a new alphanumeric output
 *
 * @param  input rotationalFactor
 * @return alphanumeric output
 */

// @TODO  Review and understand what's happening in each line
// Review similar problems, exp Ceasars
// https://www.youtube.com/watch?v=5QvYs8YgHlg&t=225s
// @TODO try to reduce bigO
// BigO = On^2
rotationalCipher = ( input, rotationalFactor ) => {
    //error checks
    if (rotationalFactor == 0 ) {return input}
    let encryptedOutput = [];
    //declare an array named alpha with array length corresponding to the number of characters in the alphabet and map the function to every letter in alpha starting with A whose charcode begins at 65
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    //creates our alphabet string from UTF-16 Code Units in alpha array
    const lettersUpper = alpha.map((x) => String.fromCharCode(x));
    const letters = alpha.map((x) => String.fromCharCode(x).toLowerCase());
    const numbers = [0,1,2,3,4,5,6,7,8,9]
    let originalInput = input.split(''); // O(n)
    originalInput.forEach( function( property) {
        if (property.match(/[a-z]/i) && property === property.toLowerCase() ) {
            //Set the index of the input
            let oldLIndex = letters.indexOf(property);
            let newLIndex = oldLIndex + rotationalFactor;
            if(newLIndex > 26) { newLIndex = Math.abs(newLIndex - 26) % 26;}
            //Set the new letter using new index
            let newL = letters[newLIndex];``
            encryptedOutput.push(newL);
        }else {
            if( property.match( /[0-9]/i ) ) {
                let oldNumIndex = numbers.indexOf(parseInt(property, 10) );
                let newNumIndex = oldNumIndex + rotationalFactor % 10;

                const newNumber = numbers[newNumIndex];
                encryptedOutput.push(newNumber);

            }else {
                if(property.match(/[a-z]/i) && property === property.toUpperCase()) {
                    //Set the index of the input
                    let oldLIndex = lettersUpper.indexOf(property);
                    let newLIndex = oldLIndex + rotationalFactor;
                    if(newLIndex > 26) { newLIndex = Math.abs(newLIndex - 26) % 26;}
                    //Set the new letter using new index
                    let newL = letters[newLIndex].toUpperCase();
                    encryptedOutput.push(newL);
                } else {
                    encryptedOutput.push(property);
                }
            }
        }

    });

    return encryptedOutput.join('').toString();
}

// JavaScript Algorithms course solution

function charCountCourseVersion( str ) {
    var obj = {};
    for ( var char of str ) {
        char = char.toLowerCase();
        // The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
        if( /[a-z0-9]/.test( char ) ) {
            obj[char] = ++ obj[char] || 1;
        }
    }
    return obj;
}

/**
 * Function to return count of characters in a string
 * Needs revisions
 *
 * @param  string str
 * @return object
 */

// @TODO Add Big O
charCount = ( str ) => {
    let count = 0;
    let properties = str.split(''); // O(n)
    let strObj = {};
    console.info(properties);

    // Split String into associative arrays O(n)
    properties.forEach( function( property) {
        property = property.toLowerCase();
        let tup = property.split(':');
        // strObj[tup[0]] = tup[1];
        // Our loop, if the property is inside the strObj
        // meaning if the property set above includes the current property in the loop

        if( property.match( /[a-z]/i ) &&  property in strObj ) {
            count++;
            // console.info( count );
            strObj[property] = count;

        }

        // If our character is not already in the strObj, but is a letter, set value to 1
        // Code will start here on first run ??
        if( property.match( /[a-z]/i ) &&  !( property in strObj ) ) {
            count = 1;
            // console.info( strObj[property] );
            strObj[property] = count;
        }
        // forEach loop end


    });

    return strObj;
}

// JavaScript Algorithms course solution

function charCountCourseVersion( str ) {
    var obj = {};
    for ( var char of str ) {
        char = char.toLowerCase();
        // The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
        if( /[a-z0-9]/.test( char ) ) {
            obj[char] = ++ obj[char] || 1;
        }
    }
    return obj;
}

// CharCode @Todo, possibly add to charCount function
function isAlphaNumeric( char ) {
    var code = str.charCodeAt( 0 );
    if( !( code > 47 && code < 58 ) && // numeric( 0-9 )
        !( code > 64 && code < 91 ) && // upperalpha ( A-z )
        !( code > 96 && code < 123 ) ) { // lower alpha ( a-z )
        return false;
    }
    return true;
}

// isAlphaNumeric(  );

// console.info( charCount("Shawn Williams" ) );
// console.info( charCountCourseVersion("Shawn Williams" ) );
console.info( rotationalCipher('All-convoYs-9-be:Alert1.', 4 ) );console.info( rotationalCipher('abcdZXYzxy-999.@', 200 ) );