function count_positive_negative(arr){
    let positive = 0;
    let negative = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > 1){
            positive++
        }
        else{
            negative++
        }
    }
    return [positive,negative];
}
console.log(count_positive_negative([5, -2, 8, -10, 3]))


/*
6. Count Positive and Negative Numbers
Problem

Given an array of integers, count how many numbers are positive and how many are negative.

Example
Input:
[5, -2, 8, -10, 3, -1]

Positive:

5, 8, 3

Negative:

-2, -10, -1

Output:

Positive = 3
Negative = 3
What about zero?

For this problem, treat 0 separately.

Example:

Input:
[5, -2, 0, 8, -1, 0]

Output:

Positive = 2
Negative = 2
Zero = 2

This is useful practice because you're learning to handle three different conditions.
*/