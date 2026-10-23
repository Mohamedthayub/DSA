function rotateArrRightOne(arr){
    let last = arr[arr.length - 1];
    for(let j = arr.length-2;  j>=0; j--){
        arr[j+1] = arr[j]; 
    }
    arr[0] = last;
    return arr;
}
console.log(rotateArrRightOne([1,2,3,4]));
