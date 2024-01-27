let login = false;

let newLogin =  new Promise( (res, rej) => {
    setTimeout(() => {
        login = false;
        rej(login);
    }, 0);
} );

newLogin.then( login => {
    console.log(login);
} ).catch( err => {
    console.log(err);
} )
