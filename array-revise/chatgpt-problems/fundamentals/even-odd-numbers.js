let odd = 0;
let even = 0;
let arr = [1,2,3,4,5];
for(let i = 0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
        even++;
    }
    else{
        odd++
    }
}
console.log(`even number ${even} and odd number ${odd}`);