// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string, without their order changing.
// Bonus Constraints:
// Time: O(n)
// Space: O(1)
// Problem Solving
// From a set of strings determine if the characters in the first set can be found in the same sequence in the second set. Strings are unsorted
// Inputs: unsorted strings of integers
// Outputs: boolean
// NOTE: Strings are unsorted
// Empty strings = false // Numbers = false

// Steps:
// 1. Error Checks
// 2. Create Pointers
// 3. Store first set of strings in array, check second set of strings against array
// 4. Move pointers if no match
// 5. Return boolean.


const isSubsequence =
    ( s1, s2 ) => {
        // Error checks // Use === to compare with null
        if ( arguments === null || typeof arguments == "number" ) {
            return false;
        }

        var i = 0;
        var trackSequence = [];

        var ourAns = false;
        s1Arr = s1.split( '' ); // O(n)
        s2Arr = s2.split( '' ); // O(n)

        for ( let j = 1; j < s2.length; j++ ) {


            if ( s1Arr.includes( s2Arr[i] ) && s2Arr[i] !== s2.length - 1 && s1Arr.length > i ) {
                trackSequence.push( s2Arr[i] );
                i++;
                ourAns = true;
            }
            // If we get to an iteration over the size of s1Arr, we have looped all of s1Arr chars
            if ( i > s1Arr.length + 1 ) {
                ourAns = true;

            }
        }
        var sortedSequence = trackSequence.sort( ( a, b ) => a.localeCompare( b ) );
        if ( sortedSequence !== undefined && s1Arr.toString().localeCompare( sortedSequence ) == 1 ) {
            ourAns = true;
        } else {
            ourAns = false;
        }
        return ourAns;
    }

console.info( isSubsequence( 'hello', 'hello world' ) ) //true
console.info( isSubsequence( 'sing', 'sting' ) ) //true
console.info( isSubsequence( 'abc', 'abracadabra' ) )//true
console.info( isSubsequence( 'abc', 'acb' ) )//false
