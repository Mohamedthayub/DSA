let arr = [1,2,3,4,5,6];

for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}


/*
1. What is Time Complexity?

Time complexity answers:

How much docleaes the amount of work increase as the input size increases?
*/

for(let i = 1; i<n; i++){
    console.log(i)
}

// the time complexity of the loop  is o(n) because the loop runs n times;

for(let i = 1; i<n; i++){
    for(let j = 1; j<n; j++){
        console.log(i,j)
    };
}