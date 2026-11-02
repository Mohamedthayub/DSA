function find_unique_char(str){
    let map = new Map();
    let temp = str;
    for(let i = 0; i<str.length; i++){
        if(!map.has(str[i])){
            map.set(str[i],1);
        }
        else{
            map.set(str[i],map.get(str[i]) + 1);
        }
    
    }
    for(let [key,value] of map){
        if(value == 1){
            return temp.indexOf(key)
        }
    }
    return -1;
}
console.log(find_unique_char("leetcode"));
