function maxConsecutive(arr){
    let max;
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == 0){
            max = count;
            count = 0;
        }
        else{
            count++;
        }
    }
    max = count;
    return max;

}
console.log(maxConsecutive([1,1,0,1,1,1,1,1,]));
