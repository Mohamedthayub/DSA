import java.util.Arrays;
public class Main{
    public static void main(String[] args){
        int[] arr = {1,2,3,4,5};
        int l = 1;
        int r = 4;
        int sum = 0;
        int[] prefix = new int[arr.length];
        prefix[0] = arr[0];
        for(int i = 1; i<arr.length; i++){
            prefix[i] = prefix[i-1] + arr[i];
        }
        if(l == 0){
            sum = prefix[r];
        }
        else{
            sum = prefix[r] - prefix[l-1];
        }
        // System.out.println(Arrays.toString(prefix));
        System.out.println(sum);
    }
}
