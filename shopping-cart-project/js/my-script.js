var number = 12;
var number2 = 13;

console.log(number + number2)

// var, let and const differences

var c = 10;

{
	var c = 12;
    console.log(c);
    
}
console.log(c);

// ------

let b = 10;

{
	let b = 12;
    console.log(b);
    
}
console.log(b);

// -------

const my_val = "My First Constant Value";
console.log(my_val);

// Data Types Explanation
let num = 7878;
let str = "my first string";
let sym = Symbol("first symbol");
let null_val = null
let bigInt_v = BigInt("12133");
let bigInt_v2 = BigInt("78787887454545454");
let bool_val = true; // true or false;

// get types of defined variables 
console.log(typeof num);
console.log(typeof str);
console.log(typeof null_val);
console.log(typeof bigInt_v);
console.log(typeof bool_val);

// artimetic operators
let num1, num2 = 0;
num1 = 34;
num2 = 54;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

// assignment operators
console.log(num1 += 12); // num1 = num1 + 12;
console.log(num1 -= 12); // num1 = num1 - 12;
console.log(num1 *= 12); // num1 = num1 * 12;
console.log(num1 /= 12); // num1 = num1 / 12;
console.log(num1 %= 12); // num1 = num1 % 12;
console.log(num1 **= 12); // num1 = num1 ** 12;

// comparison operators
console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 === num2); // checked condition as well as data type

if(num1 === num2){
    console.log("equal");
}
else {
    console.log("not equal");
}

// ternary operator
// same as if else shortest form
(num1 === num2) ? console.log("equal") : console.log("not equal");

// logical operators
(num1 != num2 && num2 > 60 && num2 > 60); //false
(num1 != num2 || num2 > 60); // true
!(num1 != num2 || num2 > 60); // false

// Conditional statments
if(num1 == num2){
    console.log("equal")
} else if(num1 > num2) {
    console.log("num1 is greater than num2");
} else if(num1 < num2) {
    console.log("num1 is less than num2");
} else {
    console.log("default case");
}