function remove_duplicates(arr){
    let  index = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[index] != arr[i]){
            index++;
            arr[index]  = arr[i];
        }
    }
    return index+1;
}
let arr = [1,2,2,3,3,4,4,5,5,6,6];
console.log(remove_duplicates(arr));
