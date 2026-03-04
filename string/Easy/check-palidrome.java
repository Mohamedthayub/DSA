
public class Main{
    static boolean isPalidrome(String name){
        int  start = 0;
        int  end = name.length() - 1;
        while(start < end){
            if(name.charAt(start) != name.charAt(end)){
                return  false;
            }
            start++;
            end--;
        }
        return true;
    }
    public static void main(String[] args){
        String name = "hello";
        System.out.println(isPalidrome(name));
    }
}
/*
 2️⃣ Check Palindrome
📌 Problem Statement

Given a string s, return true if it is a palindrome, otherwise return false.

A palindrome reads the same forward and backward.

🎯 What this tests

Comparing characters from both ends

Loop with two pointers (i, j)

Early break on mismatch

🧪 Examples
Input:  "madam"
Output: true

Input:  "racecar"
Output: true

Input:  "hello"
Output: false

*/