let students = [
	{
		id: 12,
		name: "John",
		email: "john@doe.com",
		phone: "+92 234 4356789"
	},
	{
		id: 13,
		name: "John 1",
		email: "john1@doe.com",
		phone: "+92 123 4356789"
	}
];

// for(let i = 0; i < students.length; i++){
//     console.log(students[i].id + ' - ' + students[i].name);
// }

students.forEach( (value, index) => {
    console.log(index + ' - ' + value.id + ' - ' + value.name)
} )