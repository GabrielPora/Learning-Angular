function log(message) {
    console.log(message);
}
var message = 'Hello World';
log(message);
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColourRed = 0;
var ColourGreen = 1;
var ColourBlue = 2;
var Colour;
(function (Colour) {
    Colour[Colour["Red"] = 0] = "Red";
    Colour[Colour["Green"] = 1] = "Green";
    Colour[Colour["Blue"] = 2] = "Blue";
    Colour[Colour["Purple"] = 3] = "Purple";
})(Colour || (Colour = {}));
var backgroundColor = Colour.Red;
