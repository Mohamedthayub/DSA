public class Main{
    public static void main(String[] args){
        int col = 4;
        for(int i = 0; i<col; i++){
            for(int j = 1; j<=col - i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }

}
/*
****
***
**
*
*/