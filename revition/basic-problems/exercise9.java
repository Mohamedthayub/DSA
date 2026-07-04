public class Main{
    public static void main(String[] args){
        int number = 12345;
        int sum = 0;
        while (number > 0){
            int temp = number % 10;
            sum = sum + temp;
            number = number / 10;
        }
        System.out.println(sum);
    }

}

// Find the sum of digits.
