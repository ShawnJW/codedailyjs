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
        lidOpen,
        dateAcquired
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
        this.dateAcquired = dateAcquired;
    }
    // Add methods
    toggleLid(lidStatus) {
        this.lidOpen = lidStatus;
    }
    newStrapLenght(strapLenghtL, strapLengthR) {
        this.strapLength.left = strapLenghtL;
        this.strapLength.right = strapLengthR;
    }
    backpackAge() {
        let now = new Date();
        let acquired = new Date(this.dateAcquired);
        let elapsed = now - acquired;
        let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24) );
        return daysSinceAcquired;
    }
}

export default Backpack;