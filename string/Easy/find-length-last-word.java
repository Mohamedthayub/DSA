public class Main{
    static String findLength(String words){
        String[] temp = words.split(" ");
        String lastword = temp[temp.length - 1];
        return lastword;
    }
    public static void main(String[] args){
        String  words = "one two three";
        System.out.println(findLength(words));
    }
}
/*
4️⃣ Find Length of Last Word
📌 Problem Statement

Given a string s consisting of words and spaces, return the length of the last word.

A word is a sequence of non-space characters.

🎯 What this tests

Traversing from end

Space handling

Edge cases

🧪 Examples
Input:  "Hello World"
Output: 5

Input:  " fly me to the moon "
Output: 4

Input:  "a"
Output: 1

*/