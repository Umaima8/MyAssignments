function cars (manufacturer: string, modelName: string, details: object): object {

    let car = {manufacturer ,  modelName  ,  ...details}

    return car
}

let car1 = cars("EBTEC Corporation", "Ford",{colour: "black",auto: true})

console.log(car1)

