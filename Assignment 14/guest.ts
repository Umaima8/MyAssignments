let guests: string[] = ["Ghalib", "Iqbal" , "Mir Taqi" , "Mir Dard"]
let message: string = "I would be delighted with your presence at dinner tonight.Hope you can make it!"

guests.forEach((guests) => {
    console.log(`"${guests}, ${message}"`)
})