public class Main{
    public static void main(String[] args){
        int col = 5;
        for(int i = 0; i<col; i++){
            for(int j = 1; j<=col - i; j++){
                System.out.print(j);
            }
            for(int k = 0; k<=i; k++){
                System.out.print(" ");
            }
            System.out.println();
        }
    }
}
/*
54321
5432
543
54
5
*/