/**
 * House Class
 *
 */

class House {
    constructor(
        // Define Parameters
        color,
        squareFeet,
        location,
        material,
        floors,
        roomNum,
        pool = false
    ) {
        // Define Properties
        this.color = color;
        this.squareFeet = squareFeet;
        this.location = location;
        this.material = material;
        this.floors = floors;
        this.roomNum = roomNum;
        this.pool = pool;
    }
    // Define Methods
    newSqaureFeet(squareFeet) {
        this.squareFeet = squareFeet;
    }
    hasPool(pool) {
        this.pool = pool;
    }
}

export default House;