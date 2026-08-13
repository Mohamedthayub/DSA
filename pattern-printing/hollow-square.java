public class Main{
    public static  void main(String[] args){
        int col = 5;
        int space = 3;
        for(int i = 1; i<=col; i++){
            if(i == 1 || i == col){
                for(int t = 1; t<=col; t++){
                    System.out.print("*");
                }
            }
            else{
                for(int j = 1; j<=1; j++){
                    System.out.print("*");
                }
                for(int k = 1; k<=space; k++){
                    System.out.print(" ");
                }
                for(int j = 1; j<=1; j++){
                    System.out.print("*");
                }
            }
            System.out.println();
        }
    }
}

/*
*****
*   *
*   *
*   *
*****
*/