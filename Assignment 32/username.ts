
const currentUsers: string[] = ["Umaima00", "Tyyaba345", "aqsa1","Hania","Alishba"  ];


const newUsers: string[] = ["aqsa1", "umaima00", "Iqra8", "Hassan00","Hania","ALI7"];


// Convert current usernames to lowercase for case-insensitive comparison
const currentUsersLower: string[] = currentUsers.map(user => user.toLowerCase());

// Check if each new username is already used
for (const newUser of newUsers) {
    let isUsernameAvailable = true;
    for (const currentUser of currentUsersLower) {
        if (newUser.toLowerCase() === currentUser) {
            isUsernameAvailable = false;
            break;
        }
    }
    if (isUsernameAvailable) {
        console.log(`Username '${newUser}' is available.`);
    } else {
        console.log(`Username '${newUser}' is not available. Please enter a new username.`);
    }
}
