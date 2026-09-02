let temp = 0;
let n = 8;
for(let i = 0; i<n; i++){
    let sum = temp + i;
    temp = sum ;
    if(temp > n){
        break;
    }
}
