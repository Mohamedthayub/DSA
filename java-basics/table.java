public class Main{
    static boolean isAge(int age){
        if(age > 18){
            return true;
        }
        else{
            return false;
        }
    }
    public static void main(String[] args){
        boolean result = isAge(20);
        if(result){
            System.out.println("You are eligible for vote...");
        }
        else{
            System.out.println("You are  not eligible for vote ...");
        }
      
    }
}
// we've  created a function that creates table for us ;