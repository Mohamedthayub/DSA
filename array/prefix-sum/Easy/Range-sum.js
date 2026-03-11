function findRange(arr,left,right){
    let prefix = [];
    prefix[0] = arr[0];
    for(let i = 1; i<arr.length; i++){
        prefix[i] = prefix[i-1] + arr[i];
    }
    if(left == 0){
        return prefix[right];
    }
    else{
        return  prefix[right] - prefix[left-1];
    }
}
console.log(findRange([2,4,1,3,6],1,3));
console.log(findRange([5,2,7,3,6],2,4));


/*
3️⃣ Subarray Sum Between i and j
📌 Problem Statement

Given an array nums, return the sum of elements between index i and j (inclusive).

You must compute the sum efficiently.

Example 1

Input

nums = [1,3,5,7,9]
i = 1
j = 3

Output

15

Explanation

3 + 5 + 7 = 15
Example 2

Input

nums = [4,2,6,1,3]
i = 0
j = 2

Output

12

Explanation

4 + 2 + 6 = 12
*/