function findMissingNumber(arr){
    let n = arr.length + 1;
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    let actualSum = n * (n + 1) / 2;
    return actualSum - sum;
}
console.log(findMissingNumber([1,3,4,5,6,7]));


/*
18. Find the Missing Number
Problem Statement

You are given an array containing numbers from 1 to N, but one number is missing.

Find the missing number.

Example
Input:
[1, 2, 3, 5]

Output:
4

Because:

1, 2, 3, 4, 5
          ↑
        missing
Another Example
Input:
[1, 2, 4, 5, 6]

Output:
3

The complete range should be:

1 2 3 4 5 6
    ↑
  missing
*/