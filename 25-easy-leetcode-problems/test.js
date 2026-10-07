let num = 121;
let count = 0; 
while(num > 0){
    let last = num % 10;
    if(num % last == 0){
        count++
    }
    num =Math.floor( num / 10);
}
console.log(count);