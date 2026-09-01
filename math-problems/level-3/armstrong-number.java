public class Main{
    public static void main(String[] args){
        int number = 153;
        int sum  = 0;
        int temp  = number;
        while(number > 0){
            int digit = number % 10;
            sum += digit * digit * digit;
            number /=10;
        }
        if(temp == sum){
            System.out.println("Armstrong number");
        }
        else{
            System.out.println("Not ArmStrong number");
        }
    }
}

/*
24. Check Armstrong Number

This is a very good digit + loop problem.

An Armstrong number is a number where:

The sum of each digit raised to the number of digits equals the original number.

For:

153

There are 3 digits.

Separate the digits:

1
5
3

Cube each:

1³ = 1
5³ = 125
3³ = 27

Add:

1 + 125 + 27 = 153

The result equals the original number.

Therefore:

153 → Armstrong
*/