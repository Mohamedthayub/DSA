function  checkAnagram(str1,str2){
    let map = new Map();
    if(str1.length  !== str2.length){
        return false
    }
    for(let i = 0; i<str1.length; i++){
        if(!map.has(str1[i])){
            map.set(str1[i], 1);
        }
        else{
            map.set(str1[i],map.get(str1[i]) + 1);
        }
    }
    for(let  j = 0; j<str2.length; j++){
        if(!map.has(str2[j])){
            return false;
        }
        map.set(str2[j] , map.get(str2[j]) - 1);
        if(map.get(str2[j]) < 0){
            return false;
        }
    }
    return true;
   
}
console.log(checkAnagram("aabb","ab"))




/*Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/