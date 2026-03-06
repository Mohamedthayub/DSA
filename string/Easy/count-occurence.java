import java.util.Map;
import java.util.HashMap;
public class Main{
    public static void main(String[] args){
        String name = "hello";
        HashMap <Character,Integer> occurences = new HashMap<>();
        for(int i = 0; i<name.length(); i++){
            char letter = name.charAt(i);
            occurences.put(name.charAt(i) , occurences.getOrDefault(letter,0) + 1);
        }
        System.out.println(occurences);
    }
}

/*
🟢 7️⃣ Count Occurrences of Each Character
📌 Problem Statement

Given a string s, return the frequency of each character.

🎯 What this tests

Hash map / object usage

Frequency counting pattern

Loop + condition thinking

🧪 Examples
Input:  "aabcc"
Output: { a: 2, b: 1, c: 2 }

Input:  "hello"
Output: { h:1, e:1, l:2, o:1 }

Input:  "x"
Output: { x:1 }
*/
