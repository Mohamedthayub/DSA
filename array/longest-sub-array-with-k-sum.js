let arr = [10,5,2,7,1,-10];
let k = 15;
let arrLength = [];
for(let i = 0 ; i<arr.length; i++){
    let length = 0;
    let sum = 0;
    for(let j = i; j < arr.length ; j++){
        sum  = sum + arr[j];
        length++;
        if(sum == k){
            arrLength.push(length);
        }
    }
} 

console.log(Math.max(...arrLength));