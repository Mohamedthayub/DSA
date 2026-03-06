public class Main{
    public static void main(String[] args){
        String name = "hello";
        String notVowels = "";
        for(int i = 0; i<name.length(); i++){
            char letter = Character.toLowerCase(name.charAt(i));
            if(letter != 'a'  && letter != 'e' && letter != 'i' && letter != 'o' && letter != 'u'){
                notVowels = notVowels + letter;
            }
        }
        System.out.println(notVowels);

    }
}

/*
5️⃣ Remove All Vowels from a String
📌 Problem Statement

Given a string s, return a new string after removing all vowels (a, e, i, o, u).

🎯 What this tests

Filtering characters

Condition-based string building

Loop mastery

🧪 Examples
Input:  "hello"
Output: "hll"

Input:  "javascript"
Output: "jvscrpt"

Input:  "aeiou"
Output: ""
*/