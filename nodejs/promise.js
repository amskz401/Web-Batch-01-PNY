let login = false;

let chkLogin = new Promise( (res, rej) => {
    setTimeout( () => {
        // server call to check login user, pass
        login = false;
        rej(login);
    }, 0);
} )

chkLogin.then( login => {
    console.log(login);
} ).catch( err => {
    console.log(err);
} )