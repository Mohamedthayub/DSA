function rotateArrFirstElement(arr){
    let first = arr[0];
    for(let  i = 1; i<arr.length ; i++){
        arr[i-1 ] = arr[i];
    }
    arr[arr.length - 1] = first;
    return arr;
}

console.log(rotateArrFirstElement([1,2,3,4,5]));
function rotateArrayLastElement(arr){
   let last = arr[arr.length -1];
   for(let j = arr.length - 2; j>=0; j--){
       arr[j+1] = arr[j]; 
   }
   arr[0] = last;
   return arr;
}
console.log(rotateArrayLastElement([1,2,3,4,5]));

/*

arr = [1,2,3,4,5];
ouput:
arr = [2,3,4,5,1];

-------------------- 

arr = [1,2,3,4,5]
output: 
arr = [5,1,2,3,4]

*/
 


