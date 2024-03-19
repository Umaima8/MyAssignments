let ordinal: number[] = [1,2,3,4,5,6,7,8,9]

for (let i = 0; i < ordinal.length; i++) {

    if  ( ordinal[i] === 1 ) {
        console.log(" \n 1st")
    }

    else if (ordinal[i] === 2) {
        console.log(" \n 2nd")
    }

    else if (ordinal[i] === 3) {
        console.log("\n 3rd")
    }

    else {
        console.log(`\n ${ordinal[i]}th`)
    }
}