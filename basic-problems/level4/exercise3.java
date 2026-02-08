
public class Main{
    public static void main(String[] args){
        String name = "malayalam";
        String temp = name;
        String reverse = "";
        for(int i = name.length() - 1; i>=0; i--){
            reverse = reverse + name.charAt(i);
        }
        if(reverse.equals(temp)){
            System.out.println("Palindrome..");
        }
        else{
            System.out.println("Not Palindrome..");
        }
        
    }
}
/*
1️⃣8️⃣ Palindrome String
madam → Palindrome
hello → Not Palindrome

*/