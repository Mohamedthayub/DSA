let arr = [1,2,3,4,5];
let k = ;
if(k > arr.length){
    k = k % arr.length;
}

let temp = [];
for(let i = 0; i<k; i++){
    temp.push(arr[i]);
}
for(let i = k; i<arr.length; i++){
    arr[i - k] = arr[i];
}
let index = 0;
for(let f = k+1; f<arr.length; f++){
    arr[f] = temp[index];
    index++;
}

console.log(arr);
