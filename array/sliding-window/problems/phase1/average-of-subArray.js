function averageSubArray(arr,k){
    let average = [];
    if(arr.length == 0 || k <= 0 || k > arr.length ){
        return null;
    }
    let windowSum = 0;
    for(let i = 0; i<k; i++){
        windowSum = windowSum + arr[i];
    }
    for(let i = k; i<arr.length; i++){
        average.push(windowSum / k);
        windowSum = windowSum + arr[i];
        windowSum = windowSum - arr[i-k];
    }
    average.push(windowSum / k);
    return average;
}
console.log(averageSubArray([1,3,2,6,-1,4,1,8,2],5));


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
