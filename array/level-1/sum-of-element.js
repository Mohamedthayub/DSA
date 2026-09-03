function findTheSum(arr){
    let sum =  0;
    for(let i = 0; i<arr.length; i++){
        sum = sum + arr[i];
    }

    return sum;
}
console.log(findTheSum([1,2,3,4,5]));
/*
3. Find the Sum of Elements
Problem

Given an array of integers, calculate the sum of all elements.

Example
Input:
[5, 10, 15, 20]

Output:
50

Because:

5 + 10 + 15 + 20 = 50
Another example
Input:
[2, -5, 8, 10]

Output:
15

Because:

2 + (-5) + 8 + 10 = 15
Think about

Start with a variable that stores the running total, then add each element
*/