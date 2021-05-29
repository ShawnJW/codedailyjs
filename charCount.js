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

console.info( charCount("Shawn Williams" ) );
console.info( charCountCourseVersion("Shawn Williams" ) );