let str = "Some test string for manipulation";

console.log(str.length);

// console.log(str.toLowerCase());

// console.log(str.toUpperCase());

let count = 0;
for(let i = 0; i < str.length; i++) {
   if(str[i].toLowerCase() == 's') {
    count++;
   }
}
console.log(count);

let find = str.indexOf("string");

// console.log("index of string: " + find);

// console.log(str.repeat(3));

// console.log(str.slice(6,9));

// console.log(str.split(""));

let name_str = "     Pny    Mul   tan    ";

// console.log(name_str.replace(/\s/g, ''));

// console.log(name_str.trim());

let news = '';
for(let s of name_str) {
    if(s != " ") {
        news += s;
    } 
    
}

console.log(news);