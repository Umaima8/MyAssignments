var places = ["Italy", "Scotland", "Qatar", "Turkey", "Japan"];
//printing in original form
console.log(places);
var copyPlaces = ["Italy", "Scotland", "Qatar", "Turkey", "Japan"];
//printing in alphabetical order
var places2 = copyPlaces.sort();
console.log(places2);
//printing in its original form
console.log(places);
//printing in reverse alphabatical order
//localeCompare is used to compare two strings based on their sort
var places3 = copyPlaces.sort(function (a, b) { return b.localeCompare(a); });
console.log(places3);
//printing in original order
console.log(places);
//reversing the order of your array
var reverse = places.reverse();
console.log(reverse);
//reversing to its original form
var reverse2 = places.reverse();
console.log(reverse2);
//sorting in alphabartical order
var places4 = places.sort();
console.log(places4);
//sorting in reverse alphabatical order
var places5 = places.sort(function (a, b) { return b.localeCompare(a); });
console.log(places5);
