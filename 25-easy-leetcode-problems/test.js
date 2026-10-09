let accounts =  [[2,8,7],[7,1,3],[1,9,5]];
let  wealth = [];
for(let i = 0; i<accounts.length; i++){
    let sum  = 0; 
    for(let j = 0; j<accounts[i].length; j++){
        sum = sum  + accounts[i][j];
    }
    wealth.push(sum);
}
console.log(Math.max(...wealth));