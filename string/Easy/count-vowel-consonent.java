public class Main{
    static  String count_vowel(String str){
        int vowels = 0;
        int consonent = 0;
        for(int i = 0; i<str.length(); i++){
            char letter  = Character.toLowerCase(str.charAt(i));
            if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
                vowels++;
            }
            else{
                consonent++;
            }
        }
        return  "The Vowels : " + vowels + " " + "The Consonents : " + " " + consonent;
    }
    public static void main(String[] args){
        String name = "aeiou";
        System.out.println(count_vowel(name));
    }
}

/*
3️⃣ Count Vowels and Consonants
📌 Problem Statement

Given a lowercase string s containing only alphabets, count the number of vowels and consonants.

🎯 What this tests

Character classification

if / else logic

Multiple counters

🧪 Examples
Input:  "hello"
Output: Vowels = 2, Consonants = 3

Input:  "aeiou"
Output: Vowels = 5, Consonants = 0

Input:  "bcdf"
Output: Vowels = 0, Consonants = 4
*/