function checkPalidrome(str){
    let left = 0;
    let right = str.length - 1;
    while(left < right){
        if(str[left] != str[right]){
            return false;
        }
        return true;
    }
}
console.log(checkPalidrome("racecar"));
console.log(checkPalidrome("hello"));

/*
2. Palindrome
Problem

Given a string, determine whether it is a palindrome.

A palindrome reads the same from left to right and right to left.

Use two pointers to compare characters from both ends.

Example 1
Input:
"madam"

Output:
true
Example 2
Input:
"racecar"

Output:
true
*/