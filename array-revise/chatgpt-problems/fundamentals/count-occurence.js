function count_occurence(arr,target){
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == target){
            count++;
        }
    }
    return count;
}
console.log(count_occurence([2,3,2,5,2],2));


// count occurence in the array 
