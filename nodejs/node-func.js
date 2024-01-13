
// let n = process.argv[2];

// for(let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n*i}`);
// }

let login = false;

async function newLogin() {
    await setTimeout( () => {
        login = true;
        console.log(login);
    }, 0 );
}

newLogin();

// let newLogin = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         login = false;
//         // resolve(login)
//         reject(login)
//     }, 0 );
// } ) 

// newLogin.then( login => {
//     console.log(login);
// } ).catch( error => {
//     console.log(error);
// } )
