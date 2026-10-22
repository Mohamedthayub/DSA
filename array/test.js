function findSecondLargestElement(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;
    
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i] > secondLargest && arr[i]  !== largest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
console.log(findSecondLargestElement([10, 10, 8, 7]));
console.log(findSecondLargestElement([1,2,3,4,5]));
// Expected: 8