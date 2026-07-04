public class Main{
    public static void main(String[] args){
        int num = 121;
        int temp  = num;
        int reverseNum = 0;
        while(num > 0){
            int lastdigit = num % 10;
            reverseNum = (reverseNum * 10) + lastdigit;
            num = num / 10;
        }
        if(temp == reverseNum){
            System.out.println("Palidrome Number");
        }
        else{
            System.out.println("Not Palidrom Number");
        }
    }
}