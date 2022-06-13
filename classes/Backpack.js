/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression: const Name = class {}
 * @return
 */

class Backpack {
    constructor(
        // Defines parameters:
        name,
        volume,
        color,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen
    ) {
        // Define properties
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum;
        this.strapLength = {
            left: strapLengthL,
            right: strapLengthR
        };
        this.lidOpen = lidOpen;
    }
    // Add methods
    toggleLid(lidStatus) {
        this.lidOpen = lidStatus;
    }
    newStrapLenght(strapLenghtL, strapLengthR) {
        this.strapLength.left = strapLenghtL;
        this.strapLength.right = strapLengthR;
    }
}

export default Backpack;