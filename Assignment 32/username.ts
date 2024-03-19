let current_users: string[] = ["Umaima","Tayyaba12","Iqra123","Aqsa1234","Hania321"]

let new_users: string[] = ["Hassan","Tayyaba12","Iqra123","Umer8","Burhan00"]


let lowerCase_currentUsers = current_users.map(users => users.toLowerCase())



for (let i = 0; i < new_users.length; i++) {

    let lowerCase_newUsers = new_users[i].toLowerCase()
    
    
    if (new_users === current_users) {
        console.log("Sorry already in use. Try a new user name")
    }

    else {
        console.log("this username is available")
    }
}