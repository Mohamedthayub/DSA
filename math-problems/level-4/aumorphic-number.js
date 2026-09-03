function findAutomorphic(number){
    let temp = number;
    let result = number * number;
    if(result > 0 && result <= 100){
        let singleDigit = result % 10;
        if(singleDigit == temp){
            return "Automorphic Number";
        }
    }
    if(result >= 100 && result <= 1000){
        let doubleDigit = result % 100;
        if(doubleDigit == temp){
            return "Automorphic Number"
        }
    }
    if (result > 1000){
        let tribleDigit = result % 1000;
        if(tribleDigit == temp){
            return "Automorphic Number";
        }
    }
    return  "Not Automorphic Number"

}
console.log(findAutomorphic(25));
console.log(findAutomorphic(5));