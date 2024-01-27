// api login 

let login = false;

console.log(1);

let chkLogin = new Promise( (resolve, reject) => {
    setTimeout(() => {
        // user, pass
        login = false;
        console.log(2);
        reject(login);
        
    }, 1000);

} )

console.log(3);

chkLogin.then(login => {
    console.log(login);
}).catch(error => {
    console.log(error);
});