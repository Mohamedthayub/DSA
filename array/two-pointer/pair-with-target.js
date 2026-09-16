function pairWithTarget(arr,target){
    let  first  = 0;
    let last = arr.length - 1;
    while(first < last){
        let  sum = arr[first] +  arr[last];
        if(sum == target){
            return true;
        }
        else if (sum < target){
            first++;
        }
        else{
            last--;
        }
    }
    return false;
}
console.log(pairWithTarget([0,0,0,0,0],6));
/*
10. Pair With Target
Problem

Given an array of integers and a target value, determine whether there are two different elements whose sum equals the target.

Return true if such a pair exists; otherwise return false.

Example 1
Input:
arr = [1, 2, 3, 4, 6]
target = 6

Output:
true

Because:

2 + 4 = 6
Example 2
Input:
arr = [2, 5, 7, 11]
target = 10

Output:
false
Example 3
Input:
arr = [1, 3, 5, 7, 9]
target = 10

Output:
true

Because:

1 + 9 = 10
3 + 7 = 10
Example 4
Input:
arr = [1, 1, 2, 3]
target = 2

Output:
true

Because:

1 + 1 = 2

Important: If the array is unsorted
*/