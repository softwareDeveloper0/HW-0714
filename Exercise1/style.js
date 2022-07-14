var a = prompt("Please enter a as true or false: ");
var b = prompt("Please enter b as true or false: ");

function and(a, b) {
    if (a != "true"){
        document.write("A is false");
    return false;
}
else if (b != "true") {
    document.write("B is false");
    return false;
}
else {
    document.write("A and B are true");
    return true;
}
}

and(a,b);



