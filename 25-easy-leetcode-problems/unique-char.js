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
            return key;
        }
    }
    return -1;
}
console.log(unique_character("leetcode"))
console.log(unique_character("aabb"));