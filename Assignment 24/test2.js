"use strict";
//test for equality and inequality of strings
Object.defineProperty(exports, "__esModule", { value: true });
//test for equality
var word = "HELLO";
var word2 = "hello";
console.log("\"is the the two words:".concat(word, " and ").concat(word2, " equal? I predict false\" "));
console.log(word === word2);
//test for inequality
var name = "UMAIMA";
var name2 = "umaima";
console.log("\"is the the two words:".concat(name, " and ").concat(name2, " are not  equal? I predict true\" "));
console.log(name !== name2);
//test using lowercase()
var car = "VIGO";
var car2 = "Vigo";
console.log("\"these two words: ".concat(car, " and ").concat(car2, " are equal?I predict true"));
console.log(car.toLowerCase() === car2.toLowerCase());
//test for numerical equality
var num = 10;
var num2 = 10;
console.log("\"".concat(num, " and ").concat(num2, " are equal?I predict true\""));
console.log(num === num2);
//test for inEquality
var num3 = 10;
var num4 = 5;
console.log("\"".concat(num3, " and ").concat(num4, " are not equal?I predict true\""));
console.log(num3 !== num4);
//test for greater than
var num5 = 25;
var num6 = 10;
console.log("\"is ".concat(num5, " greater than ").concat(num6, "?I predict true\""));
console.log(num5 > num6);
//test for smaller than
var num7 = 30;
var num8 = 25;
console.log("\"is ".concat(num7, " lesser than ").concat(num8, "?I predict false\""));
console.log(num7 < num8);
//test for greater than or equal to
var num9 = 30;
var num10 = 30;
console.log("\"is ".concat(num9, " greater than or equals to ").concat(num10, "?I predict true\""));
console.log(num9 <= num10);
//test for lesser than or equal to
var num11 = 30;
var num12 = 25;
console.log("\"is ".concat(num11, " lesser than or equals to ").concat(num12, "?I predict false\""));
console.log(num11 <= num12);
//test for OR operator
//the OR operator will print true even if only one value
//given is true
console.log("testing of OR operator:", 5 === 5 || 5 > 10);
//test for AND operator
//AND operator will not print true if only one value given is
//true
console.log("testing of AND operator:", 5 === 5 && 5 > 10);
//test whether an item is in the array
var numbers = [2, 6, 4, 8, 10];
console.log("\"is ".concat(numbers[1], " is in the numbers array?\""));
console.log(numbers.indexOf(6) == 1);
//test whether the item isn't in the array
console.log("\"is 9 is in the numbers array?\"");
console.log(numbers.indexOf(9) !== -1);
