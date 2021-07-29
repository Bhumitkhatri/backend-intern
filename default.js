//es5
/*
function multiply(a,b) {
    b = (typeof b !== 'undefined') ? b : 2
    console.log(a*b);
}

multiply(4);
*/

//es6

let multiply = (a,b=4) => {
    console.log(`The multiplication of two no. is ${a*b}. `);

}
multiply(4);