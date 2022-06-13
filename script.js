/**
 * Create a class for the Backpack object type
 *
 */

import Backpack from "./classes/Backpack.js";
import House from "./classes/House.js";

const backpack = new Backpack(
    "macPack",
    30,
    "black",
    12,
    24,
    24,
    false
);



console.log("The everyday pack object is", backpack )
console.log("The backpack pocket number is: ", backpack.pocketNum );

const house = new House (
    "blue",
    13433,
    "NJ",
    "Brick",
    3,
    22,
    false
);

console.log("The house is", house );
console.log("Lets add a pool: ", house.hasPool("true"));
console.log("The house has a pool: ", house.pool );