let date: string = "February 27th,2024"
let name2: string = "UMAIMA"

//in this program we simply have to  think of our fav number
//and print a message to it

let num = 8
console.log(`"my favorite number is ${num} "`)

//in this program below,we simply have to convert our text in lower
//upper and title case


let name: string = "umaima"
console.log(name.toUpperCase())
console.log(name.toLowerCase())

function toTitleCase (name: string) {
    return (name[0].toUpperCase() + name.slice(1))
}
//the slice() function in typescript extracts a section of an  array and provides a new array
let name = toTitleCase("umaima")
console.log(name)


export{}