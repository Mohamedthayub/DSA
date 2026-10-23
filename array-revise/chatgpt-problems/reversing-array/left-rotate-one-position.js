function leftRotateByOne(arr){
    let first = arr[0];
    for(let i = 1; i<arr.length; i++){
        arr[i-1] =  arr[i]; 
    }
    arr[arr.length - 1] = first;
    return arr;
}
console.log(leftRotateByOne([1,2,3,4]));

// [1,2,3,4] -> [2,3,4,1];

// rotate the array one place

