var triangleType = function(nums) {
    let side1 = nums[0];
    let side2 = nums[1];
    let side3 = nums[2];

    // 1. Check whether the sides form a valid triangle
    if (
        side1 + side2 <= side3 ||
        side1 + side3 <= side2 ||
        side2 + side3 <= side1
    ) {
        return "none";
    }

    // 2. Check whether all three sides are equal
    if (side1 === side2 && side2 === side3) {
        return "equilateral";
    }

    // 3. Check whether exactly two sides are equal
    if (
        side1 === side2 ||
        side1 === side3 ||
        side2 === side3
    ) {
        return "isosceles";
    }

    // 4. All three sides are different
    return "scalene";
};

/*
You are given a 0-indexed integer array nums of size 3 which can form the sides of a triangle.

A triangle is called equilateral if it has all sides of equal length.
A triangle is called isosceles if it has exactly two sides of equal length.
A triangle is called scalene if all its sides are of different lengths.
Return a string representing the type of triangle that can be formed or "none" if it cannot form a triangle.

 

Example 1:

Input: nums = [3,3,3]
Output: "equilateral"
Explanation: Since all the sides are of equal length, therefore, it will form an equilateral triangle.
Example 2:

Input: nums = [3,4,5]
Output: "scalene"
Explanation: 
nums[0] + nums[1] = 3 + 4 = 7, which is greater than nums[2] = 5.
nums[0] + nums[2] = 3 + 5 = 8, which is greater than nums[1] = 4.
nums[1] + nums[2] = 4 + 5 = 9, which is greater than nums[0] = 3. 
Since the sum of the two sides is greater than the third side for all three cases, therefore, it can form a triangle.
As all the sides are of different lengths, it will form a scalene triangle.
*/