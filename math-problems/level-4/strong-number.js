class Solution {
    isStrong(n) {
        // code here
        let temp = n;
        let totalSum = 0;
        while (n > 0){
            let lastdigit = n % 10;
            let sum = 1;
            for(let i = 1; i<=lastdigit; i++){
                sum = sum * i
            }
            totalSum += sum;
            n = Math.floor(n / 10);
            
        }
        if(totalSum == temp){
            return true;
        }
        else{
            return false;
        }
        
    }
};

/*
A Strong Number is a number whose value is equal to the sum of the factorials of its digits.

Given a positive integer n, determine whether it is a Strong Number. Return true if it is a Strong Number; otherwise, return false.

Examples:

Input: 145
Output: true
Explanation: The sum of the factorials of its digits is: 1! + 4! + 5! = 1 + 24 + 120 = 145.
Since the sum equals the original number, 145 is a Strong Number.
Input: 5314
Output: false
Explanation: The sum of the factorials of its digits is not equal to 5314. Therefore, it is not a Strong Number.

*/