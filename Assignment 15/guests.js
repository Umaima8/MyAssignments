var guests = ["Ghalib", "Iqbal", "Mir Taqi", "Mir Dard"];
//first we will change the name of the person who can't make it to dinner
guests[3] = "Parveen Shakira";
var message = "I would like you to join me in dinner tonight";
guests.forEach(function (guests) {
    console.log("\"".concat(guests, ",").concat(message));
});
var UnAble = "Mir Dard";
console.log("\"".concat(UnAble, ", No problem! Thanks for letting me know. Maybe next time!\""));
