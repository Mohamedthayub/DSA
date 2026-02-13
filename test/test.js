// function isLength(arr){
//     if(arr.length <= 1){
//         return false;
//     }
//     else{
//         return true
//     }
// }
// console.log(isLength([1,2]));

function pairSum(arr,target){
    arr.sort();
    if(arr.length <= 1){
        return false;
    }
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum == target){
            return true;
        }
        else if (sum > target){
            right --;
        }
        else{
            left++;
        }
    }
    return false;
}
console.log(pairSum([0,-1,2,-3,1],2));