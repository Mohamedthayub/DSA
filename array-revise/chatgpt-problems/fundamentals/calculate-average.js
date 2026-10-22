let arr = [2,4,6,8];
let n  = arr.length;
let sum = 0;
for(let  i = 0; i<arr.length; i++){
    sum = sum + arr[i];
}

let average = Math.floor(sum / n);
console.log(average);

