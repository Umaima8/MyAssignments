var users = ["Admin", "umaima88", "tayyaba232", "Aqsa123"];
for (var i = 0; i < users.length; i++) {
    if (users[i] === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("\"hey ".concat(users[i], ",thank you for logging in again\""));
    }
}
