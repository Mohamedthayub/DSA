public class Main{
    public static void main(String[] args){
        int N = 500;
        for(int i = 1; i<=N; i++){
            int temp = i;
            int arm = i;
            int sum = 0;
            while(arm > 0){
                int digit = arm % 10; 
                sum += digit * digit * digit;
                arm = arm / 10;
            }
            if(temp == sum){
                System.out.println(temp);
            }
        }
    }
}
// find armstrong number  1 to N  