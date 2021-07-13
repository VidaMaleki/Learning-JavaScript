//calculating rectangle area
function rectangleArea(width, height) {
    return width * height;
};

//calculating triangle area 
function triangleArea(base, height) {
    return base * height / 2;
};
//calculating square area 
function squareArea(a) {
    return a * a;
};

module.exports = { rectangleArea, squareArea, triangleArea }