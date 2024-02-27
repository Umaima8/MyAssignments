"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = "umaima";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
function toTitleCase(name) {
    return (name[0].toUpperCase() + name.slice(1));
}
//the slice() function in typescript extracts a section of an  array and provides a new array
var name2 = toTitleCase("umaima");
console.log(name2);
