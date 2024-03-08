var guests = ["Ghalib", "Iqbal", "Mir Taqi", "Mir Dard"];
var message = "I would be delighted with your presence at dinner tonight.Hope you can make it!";
guests.forEach(function (guests) {
    console.log("\"".concat(guests, ", ").concat(message));
});
