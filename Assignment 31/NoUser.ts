let users: string[] = ["Admin", "umaima88","tayyaba232","Aqsa123"]

/*for ( let i = 0; i < users.length; i++) {


    if (users[i] === "Admin") {
        console.log("Hello admin, would you like to see a status report?")
    }

    else {
        console.log(`"hey ${users[i]},thank you for logging in again"`)

    }
} */


//printing the msg for the empty list


users = [] 

if (users.length===0) {
    console.log("we need to find new users")
}