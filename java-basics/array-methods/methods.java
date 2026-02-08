import java.util.Arrays; // to access these array method we should   import this   class;
public class Main{
    public static void main(String[] args){
        int[] numbers = {5,3,1,2,4};
        int[] numbers2 = {5,3,1,2,4};
        System.out.println(Arrays.equals(numbers,numbers2)); //  to check two arrays are equal 
        Arrays.sort(numbers); // to sort the array
        int[] copy = Arrays.copyOf(numbers, numbers.length);// to copy the number array to copy variable;
        for(int j = 0; j<copy.length; j++){
            System.out.println(copy[j]);
        }
        System.out.println(Arrays.binarySearch(numbers,3)); //  this will take index of the given value;
       int[] numbers3 = {5,5,5,5}; // convert array to  string we use this function;
       System.out.println(Arrays.toString(numbers3));
       String newNumbers3 = Arrays.toString(numbers3);
       for(int t = 0; t<newNumbers3.length(); t++){
        System.out.println(newNumbers3.charAt(t));
       }

    }
}