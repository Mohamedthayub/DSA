let s = "aAbBcC"
let  count = 0;

for(let i = 0; i<s.length - 1; i++){
    let nextChr = s[i+1].toLocaleLowerCase();
    if(s[i].toLocaleLowerCase() != nextChr){
        count++;
    }
}
console.log(count);