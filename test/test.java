import java.util.Arrays;
public class Main{
    static boolean pairSum(int[] arr,int target){
        Arrays.sort(arr);
        if(arr.length <= 1){
            return false;
        }
        int left = 0; 
        int right = arr.length -1;
        while(left < right){
            int sum = arr[left] + arr[right];
            if(sum == target){
                return true;
            }
            else if (sum > target){
                right--;
            }
            else{
                left++;
            }
        }
        return false;
    }
    public static void main(String[] args){
        int[] arr = {0,-1,2,-3,1};
        int target = -2;
        System.out.println(pairSum(arr,target));
    }
}