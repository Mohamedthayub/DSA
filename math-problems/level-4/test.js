let num  = 5314;
let temp = num;
let totalSum = 0;
while(num > 0){
    let lastdigit = num  % 10;
    let sum = 1;
    for(let i = 1; i<=lastdigit; i++){
        sum = sum * i
    }
    totalSum += sum;
    num = Math.floor(num / 10);
}
// console.log(totalSum);
if(temp == totalSum){
    console.log("Strong Number");
}
else{
    console.log("Not Strong Number")
}

// let n = 1;
// let sum =1;
// for(let i = 1; i<=n; i++){
//     sum = sum * i;
// }
// console.log(sum);