function min_number_game(nums){
    let arr2 = [];
    let half = Math.floor(nums.length / 2);
    for(let j = nums.length- 1; j>=half; j--){
        arr2.push(nums[j]);
    }
    for(let k = 0; k<half; k++){
        arr2.push(nums[k]);
    }
    return arr2;
}
console.log(min_number_game([5,4,2,3]));