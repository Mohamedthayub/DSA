let n = 4;
let arr = [];
let start = 3;
for(let i = 0; i<n; i++){
    arr[i] = start +  2 * i;
}

let result = arr[0];
for(let j = 0; j<arr.length; j++){
    result = result  ^ arr[j];
}
console.log(result);