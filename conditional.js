let accessAllowed;
let age = prompt('How old are you?','');
if(age>18){
    accessAllowed=true;
}else{
    accessAllowed=false;
}
console.log(accessAllowed)