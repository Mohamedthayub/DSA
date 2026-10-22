function count_digits_divide_number(num){
    let count = 0;
    let temp = num;
    while(num > 0){
        let last = num  % 10 ;
        if(temp % last == 0){
            count++;
        }
        num = Math.floor(num / 10);
    }
    return count;
}
console.log(count_digits_divide_number(1248));