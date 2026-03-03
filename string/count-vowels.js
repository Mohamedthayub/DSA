function countVowels(str){
    let count = 0;

    if(str.length == 0){
        return;
    }
    for(let i = 0; i<str.length; i++){
        let char =  str[i].toLowerCase()
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            count++;
        }
    }
    return count;
}
console.log(countVowels("THAYUB"));



/*
Problem Statement
Given an input string, count and return the total number of vowels (A, E, I, O, U and a, e, i, o, u) present in it. 
Examples:
Input: "hello"
Output: 2 (e and o)
Input: "AEIOU"
Output: 5
Input: "bcdfgh"
Output: 0 

*/