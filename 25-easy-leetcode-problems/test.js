let num = 10;
let count = 0;
for(let i = 1; i<=num; i++){
    if(i  % 3 == 0 || i % 5 == 0 || i %  7 == 0){
        count = count + i ;
    }

}
console.log(count);