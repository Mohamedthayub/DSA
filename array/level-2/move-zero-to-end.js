function moveZerotoEnd(arr){
    let index = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] != 0){
            arr[index] = arr[i];
            index++;
        }
    }

    while(index < arr.length){
        arr[index] = 0;
        index++;
    }
    return arr;
}
console.log(moveZerotoEnd([0, 1, 0, 3, 12]));
console.log(moveZerotoEnd([1, 0, 2, 0, 3]));

/*
14. Move Zeros to the End
Problem Statement

Given an array containing zeros and non-zero numbers, move all zeros to the end while keeping the relative order of the non-zero elements unchanged.

Example
Input:
[0, 1, 0, 3, 12]

Output:
[1, 3, 12, 0, 0]
Another Example
Input:
[1, 0, 2, 0, 3]

Output:
[1, 2, 3, 0, 0]

Notice:

1, 2, 3

remain in the same relative order.

Challenge: Try to solve this without creating another array.
*/