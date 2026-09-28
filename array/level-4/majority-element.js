var majorityElement = function(nums) {
    let map = new Map();
    for(let i = 0; i<nums.length; i++){
        if(!map.has(nums[i])){
            map.set(nums[i],1);
        }
        else{
            map.set(nums[i],map.get(nums[i]) + 1);
        }
    } 
    let n = Math.floor(nums.length / 2);
    for(let [key,value] of map){
        if(value > n){
            return key;
        }
    }
    return -1;
};

/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/