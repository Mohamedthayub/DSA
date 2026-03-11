class Solution {
    findEquilibrium(arr) {
        // code here
        let prefix = [];
        prefix[0] = arr[0];
        for(let i = 1; i<arr.length; i++){
            prefix[i] = prefix[i-1] + arr[i];
        }
        let totalSum = prefix[prefix.length  - 1];
        for(let  j = 0; j<prefix.length; j++){
            let leftSum ;
            if(j == 0){
                leftSum = 0;
            }
            else{
                leftSum = prefix[j - 1];
            }
            let rightSum =  totalSum - prefix[j];
            if(rightSum == leftSum){
                return j;
            }
        }
        return -1;
        
    }
}

/*
Find Equilibrium Index
📌 Problem Statement

Given an integer array nums, find an index where:

sum of elements before it = sum of elements after it

Return the index.
If multiple exist, return any one.

If none exist, return -1.

Example

Input

nums = [-7,1,5,2,-4,3,0]

Output

3

Explanation

Left side  = -7 + 1 + 5 = -1
Right side = -4 + 3 + 0 = -1

Both sides are equal.
*/