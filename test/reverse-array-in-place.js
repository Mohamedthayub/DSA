function reverseArrayInplace(arr){
    let n = arr.length / 2;
    for(let i = 1 ;i<=n; i++){
        let last = arr[arr.length - i];
        arr[arr.length - i] = arr[i-1];
        arr[i - 1] = last;
    }
    return arr;
}
console.log(reverseArrayInplace([1,2,3,4,5]))