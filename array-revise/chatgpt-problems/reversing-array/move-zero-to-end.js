function moveZerotoEnd(arr){
    let index = 0;
    for(let j = 0; j<arr.length; j++){
        if(arr[j] != 0){
            arr[index] = arr[j];
            index++;
        }
    }
    while(index < arr.length){
        arr[index] = 0;
        index++;
    }
    return arr;
}
console.log(moveZerotoEnd([0,1,0,3,12]));
// move zero to end in the array