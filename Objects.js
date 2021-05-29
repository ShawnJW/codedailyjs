// Objects are also known as associative arrays
// their properties can be accessed with [] notation

function Cource ( title, instructor, views ) {
    this.title = title;
    this.instructor = instructor;
    this.views = views;
    this.updateViews = function () {
       return this.views++;
    }
}

let cources = [
    course1 = new Cource( "JavaScript 01", "Rand", "12345" ),
    course2 = new Cource( "JavaScript 02", "Rand", "12345" )

];

console.log( cources[1].instructor );