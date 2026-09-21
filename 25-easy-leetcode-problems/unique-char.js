function unique_character(str){
    let unique = new Map();
    for(let i = 0; i<str.length; i++){
        if(!unique.has(str[i])){
            unique.set(str[i],1);
        }
        else{
            unique.set(str[i],unique.get(str[i]) + 1);
        }
    } 
    for(let [key,value] of unique){
        if(value == 1){
            return str.indexOf(key);
        }
    }
    return -1;
}
console.log(unique_character("leetcode"))
// console.log(unique_character("aabb"))


/*

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
Example 1:

Input: s = "leetcode"

Output: 0

Explanation:

The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:

Input: s = "loveleetcode"

Output: 2

Example 3:

Input: s = "aabb"

Output: -1

 
*/