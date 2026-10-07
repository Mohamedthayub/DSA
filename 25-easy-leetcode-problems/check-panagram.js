/*
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false
*/
var checkIfPangram = function(sentence) {
    let map =  new Map();
    for(let i = 0; i<sentence.length; i++){
        if(!map.has(sentence)){
            map.set(sentence[i],1);
        }
        else{
            map.set(sentence[i],map.get(sentence[i]) + 1);
        }
    }  
    return map.size == 26
};
