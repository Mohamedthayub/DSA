public class Main{
    static int createTable(int table, int  number) {
        int result = number * table;
        return result;
    }
    public static void main(String[] args){
        for(int  i = 1; i <= 10; i++){
            System.out.println(i + " * " + 10 + " = " + createTable(10,i));
        }
    }
}
/*

6️⃣ Multiplication Table

Input a number

Print its multiplication table up to 10
*/