function firstNonReapeatingElement(arr){
    let map = new Map();
    for(let j = 0; j<arr.length; j++){
        if(!map.has(arr[j])){
            map.set(arr[j],1);
        }
        else{
            map.set(arr[j], map.get(arr[j]) + 1);
        }
    }
   for(let [key,value] of map){
    if(value == 1){
        return key;
    }
   }
   return -1;
}
console.log(firstNonReapeatingElement([1,2,3,2,1]))
/*
23. First Non-Repeating Element
Problem Statement

Given an array, find the first element that appears exactly once.

If every element is repeated, indicate that there is no non-repeating element.

Example
Input:
[4, 5, 1, 2, 1, 4]

Output:
5

Frequency:

4 → 2
5 → 1  ← first non-repeating
1 → 2
2 → 1

Although 2 also appears once, 5 comes first.

Another Example
Input:
[1, 2, 3, 2, 1]

Output:
3

Because:

1 → 2 times
2 → 2 times
3 → 1 time
*/