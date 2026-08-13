public class Main{
    public static void main(String[] args){
        int col = 5;
        for(int i = 1; i<=col; i++){
            if(i  % 2 != 0){
            for(int j = 1; j<=col; j++){
                if(j % 2 == 0){
                    System.out.print(0);
                }
                else{
                    System.out.print(1);
                }
            }
            }
            else{
                for(int j = 1; j<=col; j++){
                if(j % 2 == 0){
                    System.out.print(1);
                }
                else{
                    System.out.print(0);
                }
            }
            }
            System.out.println();
        }
    }
}
/*
10101
01010
10101
01010
10101
*/