function make_album(artist, albumTitle, numTracks) {
    var album = { artist: artist, title: albumTitle };
    if (numTracks !== undefined) {
        album.tracks = numTracks;
    }
    return album;
}
var Album1 = make_album("Taylor Swift", "Folklore");
var Album2 = make_album("Nirvana", "Nevermind");
var Album3 = make_album("Atif Aslam", "Rustom");
var Album4 = make_album("Ali Zafar", "Jhoom", 6);
console.log(Album1);
console.log(Album2);
console.log(Album3);
console.log(Album4);
