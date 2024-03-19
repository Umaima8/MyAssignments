function sandwiches (items: string[] = []) {

    return `You sandwich will include: ${items.join(" , ")}`

}

let sandwich1 = sandwiches(["meatballs", "a tomato sauce", "marinara sauce"])

console.log(sandwich1)

let sandwich2 = sandwiches(["Tomatoes", "Avacado", "Olives"])

console.log(sandwich2)

let sandwich3 = sandwiches(["Cheese", "Pickles", "Mayonaise","Chicken","Lettuce"])

console.log(sandwich3)

