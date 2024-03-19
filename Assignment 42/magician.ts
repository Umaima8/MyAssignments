function show_magicians (magicians: string[]): void {
      
    for (let magician of magicians) {
        //console.log(magician)
    }

}

//adding 'The Great' to every magicians name...

let Mymagicians: string[]  = ["Harry Potter", "Tom Riddle", "Draco Malfoy", "Hermione Granger"]


function make_great (magicians): void {
        
    for (let i = 0; i<Mymagicians.length; i ++) {

        console.log(`the Great ${Mymagicians[i]}`)
    }

}

make_great(Mymagicians)

show_magicians(Mymagicians)

