let guests: string[] = ["Ghalib", "Iqbal" , "Mir Taqi","Mir Dard"]

//lets create an index error

let inValid = guests[10]
console.log(inValid)


//there's another way to cause an error
if(inValid===undefined){
    console.log("index error found")
}

//lets correct this

let valid = guests[2]
console.log(valid)









export{}