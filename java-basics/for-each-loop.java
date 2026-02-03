public class Main{
    public static void main(String[] args){
        int[] numbers = {1,2,3,4,5};
        String[] names  = {"one","two","three"};
        for(int num : numbers){
            System.out.println(num);
        }
        for(String carname : names){
            System.out.println(carname);
        }
    }
}