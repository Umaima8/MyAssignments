//test for equality and inequality of strings

//test for equality
let word:string = "HELLO"
let word2: string = "hello"

console.log(`"is the the two words:${word} and ${word2} equal? I predict false" `)
console.log(word === word2)

//test for inequality
let name: string = "UMAIMA"
let name2: string = "umaima"

console.log(`"is the the two words:${name} and ${name2} are not  equal? I predict true" `)
console.log(name !== name2)

//test using lowercase()

let car: string = "VIGO"
let car2: string = "Vigo"
console.log(`"these two words: ${car} and ${car2} are equal?I predict true`)
console.log(car.toLowerCase()===car2.toLowerCase())


//test for numerical equality
let num: number = 10
let num2: number = 10
console.log(`"${num} and ${num2} are equal?I predict true"`)
console.log(num===num2)

//test for inEquality
let num3: number = 10
let num4: number = 5
console.log(`"${num3} and ${num4} are not equal?I predict true"`)
console.log(num3!==num4)


//test for greater than
let num5: number = 25
let num6: number = 10
console.log(`"is ${num5} greater than ${num6}?I predict true"`)
console.log(num5>num6)


//test for smaller than
let num7: number = 30
let num8: number = 25
console.log(`"is ${num7} lesser than ${num8}?I predict false"`)
console.log(num7<num8)


//test for greater than or equal to
let num9: number = 30
let num10: number = 30
console.log(`"is ${num9} greater than or equals to ${num10}?I predict true"`)
console.log(num9<=num10)



//test for lesser than or equal to
let num11: number = 30
let num12: number = 25
console.log(`"is ${num11} lesser than or equals to ${num12}?I predict false"`)
console.log(num11<=num12)


//test for OR operator
//the OR operator will print true even if only one value
//given is true

console.log("testing of OR operator:", 5===5 || 5>10)

//test for AND operator
//AND operator will not print true if only one value given is
//true

console.log("testing of AND operator:", 5===5 && 5>10)

//test whether an item is in the array

let numbers  = [2,6,4,8,10]
console.log(`"is ${numbers[1]} is in the numbers array?"`)
console.log(numbers.indexOf(6) == 1)



//test whether the item isn't in the array

console.log(`"is 9 is in the numbers array?"`)
console.log(numbers.indexOf(9) !== -1)

















export{}






