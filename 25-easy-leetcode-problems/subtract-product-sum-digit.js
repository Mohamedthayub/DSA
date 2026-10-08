var subtractProductAndSum = function(n) {
    let productSum = 1; 
    let temp = n;
    while(n > 0){
        productSum = productSum *  (n % 10);
        n =Math.floor(n / 10);
    }
    let sum = 0;
    while(temp > 0){
        let last = temp  % 10;
        sum = sum + last;
        temp = Math.floor(temp / 10);
    }
    return productSum - sum;
};
/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

Example 1:

Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
Example 2:

Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21
*/