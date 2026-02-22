import java.util.HashMap;
import java.util.Map;
public class Main{
    public static void main(String[] args){
        HashMap<Integer,Integer> frequencyCount = new HashMap<>();
        int[] arr = {1,2,3,4,5,1,2,3,4,5};
        for(int  i = 0; i<arr.length; i++){
            frequencyCount.put(arr[i], frequencyCount.getOrDefault(arr[i],0) + 1);
        }
        System.out.println(frequencyCount);
    }
}

