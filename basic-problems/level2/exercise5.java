
public class Main{
    public static void main(String[] args){
        int number = 121;
        int temp = number;
        int reverseNum = 0;
        while(number > 0){
            int lastDigit =  number % 10;
            number = number / 10;
            reverseNum = (reverseNum * 10) + lastDigit;
        }
        if(reverseNum == temp){
            System.out.println("Palidrome Number");
        }
        else{
            System.out.println("Not Palidrome Number");
        }
    }
}
/*

🔟 Palindrome Number
Check if a number is palindrome.

121 → Palindrome
123 → Not Palindrome

*/