function make_shirt(size, text) {
    if (size === void 0) { size = 18; }
    if (text === void 0) { text = "I Love Typescript"; }
    console.log("The size of the T-shirt is: ".concat(size));
    console.log("The text that has to be printed is: \"".concat(text, "\""));
}
var large = make_shirt(); //makes large size T-shirt
var medium = make_shirt(15); //makes medium size T-shirt
var custom = make_shirt(20, "I love Pakistan"); //makes custom size T-shirt
console.log(large);
console.log(medium);
console.log(custom);
