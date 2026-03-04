public class Main{
    static String  reverseString(String str){
        String  temp = "";
        for(int i = 0; i<str.length(); i++){
            temp = str.charAt(i) +  temp ;
        }
        return temp;
    }
    public static void main(String[] args){
        String name = "hello";
        System.out.println(reverseString(name));
    }
}



/*
1️⃣ Reverse a String
📌 Problem Statement

Given a string s, return a new string that is the reverse of s.

🎯 What this tests

Character access using index

Looping from end to start

String building

🧪 Examples
Input:  "hello"
Output: "olleh"

Input:  "a"
Output: "a"

Input:  ""
Output: ""
*/