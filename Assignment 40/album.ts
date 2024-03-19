function make_album(artist: string, albumTitle: string, numTracks?: number): object {
    const album: { artist: string; title: string; tracks?: number } = { artist, title: albumTitle };
    if (numTracks !== undefined) {
        album.tracks = numTracks;
    }
    return album;
}

const Album1 = make_album("Taylor Swift","Folklore")

const Album2 = make_album("Nirvana", "Nevermind")

const Album3 = make_album("Atif Aslam", "Rustom")

const Album4 = make_album("Ali Zafar", "Jhoom", 6)

console.log(Album1)

console.log(Album2)

console.log(Album3)

console.log(Album4)

 