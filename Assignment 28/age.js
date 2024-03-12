//let age = 1
//let age = 24
//let age = 78
//let age = 12
var age = 16;
if (age < 2) {
    console.log("You are just a BABY");
}
else if (age >= 2 && age < 4) {
    console.log("You are a TODDLER");
}
else if (age >= 4 && age < 13) {
    console.log("You are a KID");
}
else if (age >= 13 && age < 20) {
    console.log("You are a TEENAGER");
}
else if (age >= 20 && age < 65) {
    console.log("You are an ADULT");
}
else if (age > 65) {
    console.log("You are an elder");
}
else {
    console.log("Enter a valid age");
}
