let a = 12;
let b = 18;
let lcm = [];
for(let i = 1; i<=a*b; i++){
    if(i  % a == 0  && i % b == 0){
        lcm.push(i);
    }
}
console.log(Math.min(...lcm));