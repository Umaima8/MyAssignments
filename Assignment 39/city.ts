function city_country (city: string, country: string): string {

    return `"${city},${country}"`

}

let city1 = city_country("Karachi", "Pakistan")

let city2 = city_country("Jerusalem","Palestine")

let city3 = city_country("Mecca", "SaudiaArab")


console.log(city1)

console.log(city2)

console.log(city3)