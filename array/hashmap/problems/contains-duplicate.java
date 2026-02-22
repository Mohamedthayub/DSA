import java.util.HashMap;
import java.util.Map;

public class Main{
    static boolean containsDuplicate(int[] arr){
        HashMap<Integer,Integer> frequency = new HashMap<>();
        for(int i = 0; i<arr.length; i++){
            frequency.put(arr[i], frequency.getOrDefault(arr[i],0) + 1);
        }
        for(Map.Entry<Integer,Integer> number :  frequency.entrySet()){
            if(number.getValue() == 2){
                return true;
            }
        }
        return false;
    }
    public static void main(String[] args){
        int[] arr = { 1, 2, 3, 4};
        System.out.println(containsDuplicate(arr));
    }
}

/*
5️⃣ Contains Duplicate
📌 Problem Statement

Given an array of integers, check if any value appears at least twice.

🔹 Input
arr = [1, 2, 3, 4, 1]
🔹 Output
true
🔹 Explanation

1 appears more than once
*/