function copyArray(arr){
    let temp =[];
    for(let i = 0; i<arr.length; i++){
        temp.push(arr[i]);
    }
    return temp;
}
console.log(copyArray([1,2,3,4]));