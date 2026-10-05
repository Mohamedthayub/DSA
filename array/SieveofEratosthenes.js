function sieveofEratosthenes(n){
    let primes = [];
    for(let i = 1 ; i<n; i++){
        let count = 0;
        for(let j = 1; j<=i; j++){
            if(i % j == 0){
                count= count + 1;
            }
        }
        if(count == 2){
            primes.push(i);
        }
    }
    return primes;
}
console.log(sieveofEratosthenes(35));