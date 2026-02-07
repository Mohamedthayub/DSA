public class Main{
    public static void main(String[] args){
        int num = 123;
        int reverseNum =  0;
        while(num  > 0){
            int lastDigit = num  % 10;
            reverseNum = (reverseNum * 10) + lastDigit;
            num = num / 10;
        } 
        System.out.println(reverseNum);
    }
}


/*
8️⃣ Reverse a Number

Example:

Input: 1234
Output: 4321

*/