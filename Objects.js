// Objects are also known as associative arrays
// their properties can be accessed with [] notation

function Course ( title, instructor, views ) {
    this.title = title;
    this.instructor = instructor;
    this.views = views;
    this.updateViews = function () {
       return this.views++;
    }
}

let courses = [
    course1 = new Course( "JavaScript 01", "Rand", "12345" ),
    course2 = new Course( "JavaScript 02", "Rand", "12345" )

];

console.log( courses[1].instructor );

//Updated course 06/10/2022
//Objects are just like objects in real life
//The backpack is an object
//The backpack has properties such as color, size, volume
//A method is a way to change a property of an object
//A method is a name value pair with the value being a function
//Prototypes categorize objects so we know what type of object we are working with

const backpack = {
    size: 30,
    color: 'black',
    lidOpen: false,
    waterBottle: {
        volume: 30,
        color: 'clear',
    },
    strapLength: {
        left: 30,
        right: 30,
    },
    toggleLid: function(lidStatus){
        this.lidOpen = lidStatus
    },
    newStrapLength: function ( lengthLeft, lengthRight ) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },
    newColor: function ( color ) {
        this.color = color;
    }
}

console.log( "This is the current color: ", backpack.color);
console.log( "Changing the color: ", backpack.newColor( "red" ) );
console.log( "This is the new color: ", backpack.color );