let places: string[] = ["Italy","Scotland","Qatar","Turkey","Japan"]
//printing in original form
console.log(places)

let copyPlaces: string[] = ["Italy","Scotland","Qatar","Turkey","Japan"]

//printing in alphabetical order
let places2 = copyPlaces.sort()
console.log(places2)

//printing in its original form
console.log(places)

//printing in reverse alphabatical order
//localeCompare is used to compare two strings based on their sort
let places3 = copyPlaces.sort((a,b) => b.localeCompare(a) )
console.log(places3)

//printing in original order
console.log(places)

//reversing the order of your array
let reverse= places.reverse()
console.log(reverse)

//reversing to its original form

let reverse2 = places.reverse()
console.log(reverse2)

//sorting in alphabartical order
let places4 = places.sort()
console.log(places4)

//sorting in reverse alphabatical order
let places5 = places.sort((a,b) => b.localeCompare(a))
console.log(places5)

