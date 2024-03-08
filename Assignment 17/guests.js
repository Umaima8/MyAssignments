var guests = ["Ghalib", "Iqbal", "Mir Taqi", "Mir Dard"];
guests[3] = "Parveen Shakir";
guests.unshift("Faiz Ahmed Faiz");
guests.splice(2, 0, "Ahmed Faraz");
guests.push("John Elia");
guests.forEach(function (guests) {
    //console.log(`"You ${guests} are invited to dinner tonight!"`)
});
console.log("\"Sorry, ".concat(guests, ", my new dinner table got cancelled,can't invite you all\""));
//removing first guest
var unInvited = guests.pop();
console.log("\"Sorry, ".concat(unInvited, " can't invite you to dinner.Maybe next time\""));
var index = guests.indexOf("Ghalib");
var unInvited2 = guests.splice(index, 1);
console.log("\"Sorry, ".concat(unInvited2, " can't invite you to dinner.Maybe next time\""));
var index2 = guests.indexOf("Mir Taqi");
var unInvited3 = guests.splice(index2, 1);
console.log("\"Sorry, ".concat(unInvited3, " can't invite you to dinner.Maybe next time\""));
var index3 = guests.indexOf("Faiz Ahmed Faiz");
var unInvited4 = guests.splice(index3, 1);
console.log("\"Sorry, ".concat(unInvited4, " can't invite you to dinner.Maybe next time\""));
var index4 = guests.indexOf("Ahmed Faraz");
var unInvited5 = guests.splice(index4, 1);
console.log("\"Sorry, ".concat(unInvited5, " can't invite you to dinner.Maybe next time\""));
// inviting  rest of the people
guests.forEach(function (guests) {
    console.log("\"".concat(guests, ",is still invited\""));
});
//printing the empty list
guests.pop();
guests.pop();
console.log(guests);
