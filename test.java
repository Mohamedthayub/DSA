public class Main {

    public static void main(String[] args) {

        int number = 153;

        int temp = number;

        int sum = 0;

        while (number > 0) {

            int digit = number % 10;

            sum = sum + (digit * digit * digit);

            number = number / 10;
        }

        if (temp == sum) {

            System.out.println("This is Armstrong Number");

        } else {

            System.out.println("This is not Armstrong Number");
        }
    }
}