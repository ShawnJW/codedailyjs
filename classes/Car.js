/**
 * Car Class
 *
 */

class Car {
    constructor(
        // Define parameters
        color,
        make,
        model,
        doorNum,
        engineType,
        convertibleStatus
    ) {
        // Define properties
        this.color = color;
        this.make = make;
        this.model = model;
        this.doorNum = doorNum;
        this.engineType = engineType;
        this.convertibleStatus = true;
    }
    // Define methods
    changeColor(color) {
        this.color = color;
    }
    makeConvertible(convertibleStatus) {
        this.convertible = convertibleStatus
    }
}

export default Car;