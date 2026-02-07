public class Main{
    public static void main(String[] args){
        int number = 50012;
        int count  = 0;
        while(number > 0){
            count++;
            number = number / 10;
            
        }
        System.out.println("The count is " + count);
    }
}
/*
9️⃣ Count Digits

Example:

Input: 50012
Output: 5


*/