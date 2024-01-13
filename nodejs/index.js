let student = {
    id: 10,
    name: "David",
    age: 20
}
let student1 = {
    id: 11,
    name: "David5",
    age: 20
}
let student2 = {
    id: 12,
    name: "David",
    age: 20
}

let students = [student, student1, student2];

console.log(students);

// let find = students.filter( (student) => {
//     return student.name == 'David';
// }  );

// for(let student in student2) {
//     console.log(student2[student]);
// }

// console.log(find);

//

let callMe = (name78 = "") => {
    console.log(name78);
    a = 10;
    if( a == 10 ) {
        console.log("Some meesage for you at number "+a);
    }
    else if(a == 9) {
        console.log("Some meesage for you at number "+a);
    }
    else if(a == 8) {
        console.log("Some meesage for you at number "+a);
    }
    else if(a == 7) {
        console.log("Some meesage for you at number "+a);
    }
    else if(a == 6) {
        console.log("Some meesage for you at number "+a);
    }
    else if(a == 5) {
        console.log("Some meesage for you at number "+a);
    }
    else {
        console.log("Some meesage for you at number "+a);
    }
}

callMe("John");