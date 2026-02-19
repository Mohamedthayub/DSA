
class Solution {
    public int majorityElement(int[] nums) {
        HashMap <Integer,Integer> frequency = new HashMap<>();
        for(int  i = 0; i<nums.length; i++){
            frequency.put(nums[i],frequency.getOrDefault(nums[i],0) + 1);
        }
        int n = nums.length / 2;
        for(Map.Entry<Integer,Integer> number : frequency.entrySet()){
            if(number.getValue()  > n) {
                return number.getKey();
            }  
        }
        return -1;
    }
}

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