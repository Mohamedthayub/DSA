function countEvenNumbers(numbers){
    let even_numbers = 0;
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i] % 2 == 0){
            even_numbers++;
        }
    }
    return `Even numbers ${even_numbers}`;
}
console.log(countEvenNumbers([1, 2, 3, 4, 5, 6]));

/*
8. 📊 Count Even Numbers

You are analyzing numbers.

👉 Given:

const numbers = [1, 2, 3, 4, 5, 6];

👉 Task:
Count how many numbers are even
*/