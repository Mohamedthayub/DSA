let arr = [-2, 0, 4, -1, 3];
let positive = 0;
let negative = 0;
let zero = 0;
for(let i = 0; i<arr.length; i++){
    if(arr[i] == 0){
        zero++;
    }
    else if (arr[i] > 0){
        positive++;
    }
    else{
        negative++;
    }
}
console.log(`Zero is ${zero}, Positive is ${positive},Negative is ${negative}`);