function findTheAverage(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    let average = sum / arr.length; 
    return  average;
}
console.log(findTheAverage([10,20,30,40,50]));
/*
4. Find the Average
Problem

Given an array of numbers, calculate the average of all elements.

Example
Input:
[10, 20, 30, 40, 50]

Output:
30

Because:

Sum = 150
Number of elements = 5

Average = 150 / 5
        = 30
Another example
Input:
[5, 10, 15]

Output:
10
Think about

You need two things:

Total sum
Number of elements

Then:

Average = Sum / Number of elements

*/