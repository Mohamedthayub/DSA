import java.util.HashMap;
import java.util.Map;

public class Main{
    static int find_unique(int[] arr){
        HashMap<Integer,Integer> unique  = new HashMap<>();
        for(int i = 0; i<arr.length; i++){
            unique.put(arr[i], unique.getOrDefault(arr[i],0) + 1);
        }
        
       for(Map.Entry<Integer,Integer> number : unique.entrySet()){
        if(number.getValue() == 1){
            return number.getKey();
        }
       }
       return -1;
    }
    public static void main(String[] args){     
        int[] arr = {4, 5, 4, 5, 6};
        System.out.println(find_unique(arr));
    }
}

/*
2️⃣ First Unique Element
📌 Problem Statement

Given an array of integers, find the first element that appears exactly once.

🔹 Input
arr = [4, 5, 4, 5, 6]

🔹 Output
6

🔹 Explanation

4 → appears twice

5 → appears twice

6 → appears once → first unique

📌 If no unique element exists, return -1.
*/