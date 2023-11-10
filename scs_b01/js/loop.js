// loops exloration

// for loop
// for(let index = 0; index <= 10; index++){
// 	// if(index % 2 == 1){
// 	// 	console.log("Even: " + index);
// 	// }

	
// 	if (index == 4) {
// 		continue;
// 	}
// 	console.log("Index: " + index);

// 	// if(index == 5){

// 	// 	break;
// 	// }
// }

// while loop
// let index = 1;
// while(100 < 10){
// 	console.log("In while: " + index);
// 	index++;
// }

// do while 
// let number = 0;
// do{
// 	prompt("Enter Number: " + number);
// 	if(number == 50){
// 		break;
// 	}
	
// }
// while(true);
// let name = "john";
// let studentArr = [
// 		1, "john", 12, 123455
// 	];
	

const students = [
	{
		id: 2,
		name: "john",
		age: 12,
		phone: 1234556
	}, 
	{
		id: 2,
		name: "john",
		age: 12,
		phone: 1234556
	},
	{
		id: 2,
		name: "john",
		age: 12,
		phone: 1234556
	},
	{
		id: 2,
		name: "john",
		age: 12,
		phone: 1234556
	},
	{
		id: 2,
		name: "john",
		age: 12,
		phone: 1234556
	}
];

// iterate itmes using length;
// for(let i = 0; i < students.length; i++){
//     console.log(students[i]);
// }

// itereate items using in method
// for(let ind in students){
//     console.log(students[ind]);
// }

// students.forEach(( value, index ) => {
//     console.log(value);
// });
let str = "my name is ahmad";

let counter = 0;
for(let ind = 0; ind < str.length; ind ++){
    if(str[ind] === 'm'){
        ++counter;
    }
}
console.log(str + ": " + counter);


let arr = [12, 32, 12, 42, 65, 89, 12];

