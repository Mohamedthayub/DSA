function countEvenOdd(arr){
    let odd = 0;
    let even = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] % 2 == 0){
            even++;
        }
        else{
            odd++
        }
    }
    return [odd,even];
}
console.log(countEvenOdd([1,2,3,5,6]));

/*
5. Count Even and Odd Numbers
Problem

Given an array of integers, count how many numbers are even and how many are odd.

Example
Input:
[1, 2, 3, 4, 5, 6]

Even numbers:

2, 4, 6

Odd numbers:

1, 3, 5

Output:

Even = 3
Odd = 3
Think about

You already know the % operator.

Ask for every number:

number % 2

If the remainder is 0 → even.

Otherwise → odd.
*/