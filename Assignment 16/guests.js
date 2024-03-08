var guests = ["Ghalib", "Iqbal", "Mir Taqi", "Mir Dard"];
guests[3] = "Parveen Shakir";
console.log("\"Hey ".concat(guests, ", found a bigger dining table so I am invite more people to dinner.It's gonna be fun..\""));
//adding a guest in the beginning of my array by using unshift method
guests.unshift("Faiz Ahmed Faiz");
//adding in the middle of my array by using the method of splice
guests.splice(2, 0, "Ahmed Faraz");
//adding at the end of an array using push method
guests.push("John Elia");
guests.forEach(function (guests) {
    console.log("\"You ".concat(guests, " are invited to dinner tonight!\""));
});
