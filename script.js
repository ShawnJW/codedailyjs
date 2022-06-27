/**
 * Create a class for the Backpack object type
 *
 */

import Backpack from "./classes/Backpack.js";
import House from "./classes/House.js";
import Car from "./classes/Car.js"

const backpack = new Backpack(
    "macPack",
    30,
    "black",
    12,
    24,
    24,
    false,
    "December 5, 2018 15:00:00 PST",
);



console.log("The everyday pack object is", backpack )
console.log("The backpack pocket number is: ", backpack.pocketNum );
console.log("The backpack days since acquired: ", backpack.backpackAge() );

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
console.log("Lets add a pool: "); house.hasPool("true");
console.log("The house has a pool: ", house.pool );

const car = new Car(
    "blue",
    "i8",
    "BMW",
    2,
    "dual",
    false
);

console.log("The car is", car );
console.log("Lets drop the top:"); car.makeConvertible("true");
console.log("I just dropped the top: ", car.convertibleStatus );

// String Output
// const content = `
// <h2>${backpack.name}</h2>
// <ul>
// <li>Volume: ${backpack.volume}</li>
// <li>Color: ${backpack.color}</li>
// <li>Age: ${backpack.backpackAge()}</li>
// <li></li>
// <li></li>
// <li></li>
// <li></li>
// <li></li>
// </ul>
// `;

// document.body.innerHTML = content;

/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = {
    name: "Frog Backpack",
    volume: 8,
    color: "green",
    pocketNum: 3,
    strapLength: {
        left: 10,
        right: 10,
    },
    lidOpen: false,
    image: "../../assets/images/frog.webp",
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },
};

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
    frogpack.volume
}l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
    frogpack.color
}</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
    frogpack.pocketNum
}</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
    frogpack.strapLength.left
} inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
    frogpack.strapLength.right
} inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
    frogpack.lidOpen ? "open" : "closed"
}</span></li>
    </ul>  
`;



const newFigure = () => {
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    img.setAttribute("src", frogpack.image)
    let figCaption = document.createElement("figcaption");
    figCaption.innerHTML = "This is my funky Frog";
    figure.append(img);
    figure.append(figCaption);
    return figure;
}
console.log(newFigure());

const newArticle = () => {
    const article = document.createElement("article");
    article.innerHTML = content;
    article.append(newFigure());
    document.querySelector("main").append(article);
    // return article;
}
console.log(newArticle());

