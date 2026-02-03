/*
Java Variables
Variables are containers for storing data values.

In Java, there are different types of variables, for example:

String - stores text, such as "Hello". String values are surrounded by double quotes
int - stores integers (whole numbers), without decimals, such as 123 or -123
float - stores floating point numbers, with decimals, such as 19.99 or -19.99
char - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes
boolean - stores values with two states: true or false


*/

public class Main{
    public static void main(String[] args){
        int number = 12;
        if(number > 12){
            System.out.println("number is greater than 12");
        }
        else if (number == 12){
            System.out.println("Number is  equal to 12");
        }
        else{
            System.out.println("number is less than 12");
        }
    }
}

