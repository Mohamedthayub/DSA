public class Main{
    public static void main(String[] args){
        int numbers = 123456;
        int count = 0;
        while(numbers > 0){
            count = count + 1;
            numbers = numbers / 10;
        }
        System.out.println(count);
    }
}
// Count the digi ts in a number.
