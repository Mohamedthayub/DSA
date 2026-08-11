public class Main{
    public static void main(String[] args){
        int col = 5;
        for(int i  = 0; i<col; i++){
            if(i == 2){
                for(int k = 1; k<=col; k++){
                    System.out.print("* ");
                }
            }
            else{
                for(int j = 0; j<=2; j++){
                System.out.print(" ");
               }
                for(int f = 1; f<=1; f++){
                    System.out.print("*");
                }
                for(int t = 0; t<=2; t++){
                System.out.print(" ");
            }
            }
            System.out.println();
        }
    }
}

/*
   *   
   *   
* * * * * 
   *   
   *   
*/