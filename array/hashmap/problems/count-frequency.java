import java.util.HashMap;
public class Main{
    public static void main(String[] args){
        int[] arr = {1, 2, 2, 3, 3, 3};
        HashMap<Integer,Integer> frequency = new HashMap<>();

        for(int i = 0; i<arr.length; i++){
            frequency.put(arr[i], frequency.getOrDefault(arr[i],0) + 1);
        }
        System.out.println(frequency);
    }
}
/*
1️⃣ Count Frequency of Elements
📌 Problem Statement

Given an array of integers, count how many times each element appears in the array.

🔹 Input
arr = [1, 2, 2, 3, 3, 3]

🔹 Output
1 → 1
2 → 2
3 → 3

🔹 Explanation

1 appears once

2 appears twice

3 appears three times

📌 Used for: frequency counting, preprocessing data
*/