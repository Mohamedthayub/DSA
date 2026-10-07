// let arr = [1,2,3,4,5];
// let maxProduct = [];
// for(let i = 0; i<arr.length; i++){
//     let product = 1;
//     for(let j = i; j<arr.length; j++){
//         product = product * arr[j];
//     }
//     maxProduct.push(product);
// }
// console.log(maxProduct);


// let maxProduct2 = [];
// let arr2 = [-2, 6, -3, -10, 0, 2];
// for(let k = 0; k<arr2.length; k++){
//     let product = 1;
//     for(let t = 0; t<arr2.length; t++){
//         product = product * arr2[t];
//     }
//     maxProduct2.push(product);
// }
// console.log(maxProduct2);

var maxProduct = function(arr) {
    let maxProduct = arr[0];
    let minProduct = arr[0];
    let answer = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const num = arr[i];

        const currentMax = Math.max(
            num,
            maxProduct * num,
            minProduct * num
        );

        const currentMin = Math.min(
            num,
            maxProduct * num,
            minProduct * num
        );

        maxProduct = currentMax;
        minProduct = currentMin;

        answer = Math.max(answer, maxProduct);
    }

    return answer;
};
console.log(maxProduct([-2, 6, -3, -10, 0, 2]))