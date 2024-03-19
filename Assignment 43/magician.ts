function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(`the Great ${magicians[i]}`);
    }
    return greatMagicians;
}


const ActualMagicians: string[] = ["Harry Potter", "Hermione Granger", "Draco Malfoy"];


const greatMagicians = make_great(ActualMagicians);



show_magicians(greatMagicians);
show_magicians(ActualMagicians);


