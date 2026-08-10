public class Main{
    public static void main(String[] args){
        int col = 5; 
        for(int i = 0; i<col; i++){
            for(int j = 1; j<=i; j++){
                System.out.print(" ");
            }
            for(int k = 1; k<=col- i; k++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
/*
* * * * * 
 * * * * 
  * * * 
   * * 
    * 
*/