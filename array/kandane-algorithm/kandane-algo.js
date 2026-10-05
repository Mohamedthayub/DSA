function maxSubArray(arr){
    let currentSum = arr[0];
    let maxSum = arr[0];
    for(let  i = 1; i<arr.length; i++){
        currentSum = Math.min(arr[i],currentSum + arr[i]);
        maxSum = Math.min(maxSum,currentSum)
    }
    return maxSum;
}
console.log(maxSubArray([2,6,8,1,4]));


// output: 6