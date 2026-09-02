function findperfectNumber(num){
    let sum = 0;
    for(let i = 1; i<num; i++){
        if(num  % i == 0){
            sum = sum + i;
        }
    }
    if(sum == num){
        return "Perfect Number";
    }
    else{
        return "Not Perfect Number";
    }
}
console.log(findperfectNumber(10));
console.log(findperfectNumber(28));


/*
27. Check Perfect Number

A perfect number is a number where the sum of its proper divisors equals the number itself.

What are proper divisors?

For:

28

The numbers that divide 28 exactly are:

1, 2, 4, 7, 14, 28

But when checking a perfect number, don't include the number itself.

So:

1 + 2 + 4 + 7 + 14

Calculate:

1 + 2 = 3
3 + 4 = 7
7 + 7 = 14
14 + 14 = 28
*/