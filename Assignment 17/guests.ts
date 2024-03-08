let guests: string[] = ["Ghalib", "Iqbal" , "Mir Taqi","Mir Dard"]

guests[3] = "Parveen Shakir"

guests.unshift("Faiz Ahmed Faiz")

guests.splice(2,0,"Ahmed Faraz")

guests.push ("John Elia")

guests.forEach((guests) => {
    //console.log(`"You ${guests} are invited to dinner tonight!"`)

})

console.log(`"Sorry, ${guests}, my new dinner table got cancelled,can't invite you all"`)

//removing first guest

const unInvited = guests.pop()
console.log(`"Sorry, ${unInvited} can't invite you to dinner.Maybe next time"`)

const index = guests.indexOf("Ghalib")
const unInvited2 = guests.splice(index,1)
console.log(`"Sorry, ${unInvited2} can't invite you to dinner.Maybe next time"`)

const index2 = guests.indexOf("Mir Taqi")
const unInvited3 = guests.splice(index2,1)
console.log(`"Sorry, ${unInvited3} can't invite you to dinner.Maybe next time"`)

const index3 = guests.indexOf("Faiz Ahmed Faiz")
const unInvited4 = guests.splice(index3,1)
console.log(`"Sorry, ${unInvited4} can't invite you to dinner.Maybe next time"`)

const index4 = guests.indexOf("Ahmed Faraz")
const unInvited5 = guests.splice(index4,1)
console.log(`"Sorry, ${unInvited5} can't invite you to dinner.Maybe next time"`)


// inviting  rest of the people
guests.forEach((guests) => {

    console.log(`"${guests},is still invited"`)

})

//printing the empty list

guests.pop()
guests.pop()

console.log(guests)