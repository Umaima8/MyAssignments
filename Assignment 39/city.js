function city_country(city, country) {
    return "\"".concat(city, ",").concat(country, "\"");
}
var city1 = city_country("Karachi", "Pakistan");
var city2 = city_country("Jerusalem", "Palestine");
var city3 = city_country("Mecca", "SaudiaArab");
console.log(city1);
console.log(city2);
console.log(city3);
