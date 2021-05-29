const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Only change code below this line
    let index = 0;
    // const failureItems = [];
    // Iterate over array and add failure value to an li
// To access key pair value from object, use index i.e. result.failure[0], result.failure[1]
    const failureItems = [];
    for( let i = 0; i < result.failure.length; i ++ ) {
        failureItems.push(`<li class="text-warning">${result.failure[index]}</li>`);
        index++;
    }
    // Only change code above this line

    return failureItems;
}

const failuresList = makeList(result.failure);

console.log( failuresList );