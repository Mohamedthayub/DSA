/*
29. Equilibrium / Pivot Index

This one is slightly different.

What is the problem?

Find an index where:

sum of elements on the LEFT
=
sum of elements on the RIGHT

The element at the pivot itself is not included.

Best Example
arr = [1, 7, 3, 6, 5, 6]

Let's check index 3:

Index:  0  1  2  3  4  5
Array: [1, 7, 3, 6, 5, 6]
                  ↑
                pivot
Left side

Elements before index 3:

1 + 7 + 3 = 11
Right side

Elements after index 3:

5 + 6 = 11

Therefore:

Left Sum  = 11
Right Sum = 11

So:

Answer = 3
*/
function pivotIndex(arr) {
    let totalSum = 0;
    let leftSum = 0;

    // Calculate total sum
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    }

    // Check every index as a possible pivot
    for (let i = 0; i < arr.length; i++) {
        let rightSum = totalSum - leftSum - arr[i];

        if (leftSum === rightSum) {
            return i;
        }

        leftSum += arr[i];
    }

    return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));