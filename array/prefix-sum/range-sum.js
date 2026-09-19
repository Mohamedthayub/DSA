function  rangeSum(arr,left,right){
    for(let i =  1; i<arr.length; i++){
        arr[i] = arr[i-1] + arr[i];
    }
    if(left == 0){
        return arr[right];
    }
    else{
        let result = arr[right] - arr[left - 1];
        return result;
    }
}
console.log(rangeSum([2,4,1,5,3],1,3));

/*
28. Range Sum
What is the problem?

You are given an array and two indexes:

left
right

You need to find the sum of all elements between left and right, including both indexes.

Example
arr = [2, 4, 1, 5, 3]

left = 1
right = 3

Look at the indexes:

Index:   0  1  2  3  4
         ↓  ↓  ↓  ↓  ↓
Array:  [2, 4, 1, 5, 3]
            └──────┘

We need:

4 + 1 + 5

Therefore:

Answer = 10
Why Prefix Sum?

First create:

Array:
[2, 4, 1, 5, 3]

Prefix:
[2, 6, 7, 12, 15]

Meaning:

prefix[0] = 2

prefix[1] = 2 + 4 = 6

prefix[2] = 2 + 4 + 1 = 7

prefix[3] = 2 + 4 + 1 + 5 = 12

prefix[4] = 2 + 4 + 1 + 5 + 3 = 15

Now:

sum(1 → 3)

can be obtained from the prefix sums instead of adding every element again.

The important idea is:

Prefix Sum allows you to calculate a range sum quickly.

Another example
arr = [10, 20, 30, 40, 50]

left = 2
right = 4

We need:

30 + 40 + 50 = 120
*/