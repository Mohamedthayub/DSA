public class Main{
    public static void main(String[] args){
        int col = 10;
        for(int i = 1; i<=col; i++){
            for(int j = 1; j<=i; j++){
                System.out.print("*");
            }
            for(int k = 1; k<=(col - i) * 2; k++){
                System.out.print(" ");
            }
            for(int t = 1; t<=i; t++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}

/*

*      *
**    **
***  ***
********

*/