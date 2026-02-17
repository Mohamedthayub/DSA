let number = 121;
let string = number.toString();
console.log(typeof string);
let temp = "";
for(let i = string.length - 1; i>=0; i--){
    temp = temp + string[i];
}
if(number == temp){
    console.log("palidrome number");
}
else{
    console.log("Not palidrome");
}