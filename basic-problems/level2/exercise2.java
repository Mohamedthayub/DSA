public class Main{
    public static void main(String[] args){
        int number = 123;
        int sum = 0;
        while(number > 0){
            sum =  sum + number % 10;
            number = number / 10;
        } 
        System.out.println(sum);
    }
}

/*
7️⃣ Sum of Digits

Example:

Input: 123
Output: 6
*/