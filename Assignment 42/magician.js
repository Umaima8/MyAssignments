function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        //console.log(magician)
    }
}
//adding 'The Great' to every magicians name...
var Mymagicians = ["Harry Potter", "Tom Riddle", "Draco Malfoy", "Hermione Granger"];
function make_great(magicians) {
    for (var i = 0; i < Mymagicians.length; i++) {
        console.log("the Great ".concat(Mymagicians[i]));
    }
}
make_great(Mymagicians);
show_magicians(Mymagicians);
