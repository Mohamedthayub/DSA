function averageSubArray(arr,k){
    if(arr.length == 0  || k <= 0 || k > arr.length){
        return ;
    }
    let windowSum = 0;
    for(let i = 0; i<k; i++){
        windowSum = windowSum + arr[i];
    }
    let average = [];

    for(let j = k; j<arr.length; j++){
        average.push(windowSum / k);
        windowSum  = windowSum +  arr[j];
        windowSum = windowSum  - arr[j-k]; 
    }
    average.push(windowSum / k);
    return average;
}
console.log(averageSubArray( [1, 3, 2, 6, -1, 4, 1, 8, 2],5));
/*
2️⃣ Average of Subarrays of Size k
📌 Problem Statement

Given an array of integers and an integer k, calculate the average of all contiguous subarrays of size k.

🔹 Example
Input:
arr = [1, 3, 2, 6, -1, 4, 1, 8, 2]
k = 5



Output:
[2.2, 2.8, 2.4, 3.6, 2.8]
🔹 Explanation

Each output value represents the average of one window of size 5.
*/
