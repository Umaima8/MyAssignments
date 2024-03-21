var currentUsers = ["Umaima00", "Tyyaba345", "aqsa1", "Hania", "Alishba"];
var newUsers = ["aqsa1", "umaima00", "Iqra8", "Hassan00", "Hania", "ALI7"];
// Convert current usernames to lowercase for case-insensitive comparison
var currentUsersLower = currentUsers.map(function (user) { return user.toLowerCase(); });
// Check if each new username is already used
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    var isUsernameAvailable = true;
    for (var _a = 0, currentUsersLower_1 = currentUsersLower; _a < currentUsersLower_1.length; _a++) {
        var currentUser = currentUsersLower_1[_a];
        if (newUser.toLowerCase() === currentUser) {
            isUsernameAvailable = false;
            break;
        }
    }
    if (isUsernameAvailable) {
        console.log("Username '".concat(newUser, "' is available."));
    }
    else {
        console.log("Username '".concat(newUser, "' is not available. Please enter a new username."));
    }
}
