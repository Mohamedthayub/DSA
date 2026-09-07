let arr = [1, -2, 3, -4, 5, -6]
let negative = [];
let positive = [];
for(let i = 0; i<arr.length; i++){
    if(arr[i] < 0){
        negative.push(arr[i]);
    }
    else{
        positive.push(arr[i]);
    }
}
let temp = [];
let index = 0;
for(let j = 0; j<negative.length; j++){
    temp[j] = negative[j];
}
for(let k = temp.length; k<arr.length; k++){
    temp[k] = positive[index];
    index++;
}
console.log(temp);

let map = new Map();
arr.sort((a,b) => a - b);
for(let t = 0; t<arr.length; t++){
    if(!map.has(arr[t])){
        map.set(arr[t],1);
    }
    else{
        map.set(arr[t], map.get(arr[t]) + 1);
    }
}
let temp2 = [];
for(let [key,value] of map){
    temp2.push(key);
}
console.log(temp2);

/*
15. Move Negative Numbers
Problem Statement

Given an array containing positive and negative numbers, rearrange the array so that all negative numbers come before the positive numbers.

Example
Input:
[1, -2, 3, -4, 5, -6]

Output:
[-2, -4, -6, 1, 3, 5]
Another Example
Input:
[5, -1, 4, -2, 3]

Output:
[-1, -2, 5, 4, 3]

For the first attempt, focus on the logic of separating negative and non-negative values rather than worrying about maintaining their original order.
*/