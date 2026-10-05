let maxProduct = [];
let arr = [-2, 6, -3, -10, 0, 2];
for(let i = 0; i<arr.length; i++){
    let  product = 1;
    for(let j = i; j<arr.length; j++){
       product = product * arr[j]; 
    }
    maxProduct.push(product);
}
console.log(maxProduct);