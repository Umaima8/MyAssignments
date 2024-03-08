let guests: string[] = ["Ghalib", "Iqbal" , "Mir Taqi" , "Mir Dard"]

//first we will change the name of the person who can't make it to dinner

guests[3] = "Parveen Shakira"

let message: string = "I would like you to join me in dinner tonight"

guests.forEach((guests) => {
    console.log(`"${guests},${message}"`)

})

const UnAble: string = "Mir Dard"
console.log(`"${UnAble}, No problem! Thanks for letting me know. Maybe next time!"`)