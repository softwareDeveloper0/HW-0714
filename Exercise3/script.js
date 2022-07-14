var numberOfSides = parseInt(prompt("Please enter number of sides: "));
var shape = prompt("Please enter shape c for circle s for square: ");

function getPerimeter (shape, numberOfSides) {
    var p = null;
    shape === "c"
    ? (p = 6.28 * numberOfSides) : (p= 4 * numberOfSides);

    return p; 
}

document.write("Perimeter of shape " + shape + " with number of sides " + numberOfSides + " equals " + getPerimeter(shape,numberOfSides));