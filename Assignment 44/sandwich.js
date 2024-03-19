function sandwiches(items) {
    if (items === void 0) { items = []; }
    return "You sandwich will include ".concat(items.join(" , "));
}
var sandwich1 = sandwiches(["meatballs", "a tomato sauce", "marinara sauce"]);
console.log(sandwich1);
var sandwich2 = sandwiches(["Tomatoes", "Avacado", "Olives"]);
console.log(sandwich2);
var sandwich3 = sandwiches(["Cheese", "Pickles", "Mayonaise", "Chicken", "Lettuce"]);
console.log(sandwich3);
