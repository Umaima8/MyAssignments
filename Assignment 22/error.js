"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guests = ["Ghalib", "Iqbal", "Mir Taqi", "Mir Dard"];
//lets create an index error
var inValid = guests[10];
//console.log(inValid)
//there's another way to cause an error
if (inValid === undefined) {
    console.log("index error found");
}
//lets correct this
var valid = guests[2];
console.log(valid);
