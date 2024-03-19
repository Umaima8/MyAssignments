function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great ".concat(magicians[i]));
    }
    return greatMagicians;
}
var ActualMagicians = ["Harry Potter", "Hermione Granger", "Draco Malfoy"];
var greatMagicians = make_great(ActualMagicians);
show_magicians(greatMagicians);
show_magicians(ActualMagicians);
