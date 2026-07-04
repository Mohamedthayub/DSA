public class Main{
    public static void main(String[] args){
        int number = 12345;
        int reverseNum = 0; 
        while(number > 0){
            int lastdigit = number % 10;
            reverseNum = (reverseNum * 10 ) + lastdigit;
            number = number / 10;

        }        
        System.out.println(reverseNum);
    }
}

// Reverse a number.
