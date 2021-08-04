function sum(x,y,z) {
    console.log(x);
    console.log(y);
    console.log(z);

    return x + y + z;

}
let number = [1,2,3];
console.log(sum(...number))