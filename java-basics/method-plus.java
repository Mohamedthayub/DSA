public class Main{
    static int addToNumber(int number1,int number2){
        return number1 + number2;
    }
    static double addToDouble(double number1, double number2){
        return number1 + number2;
    }

    public static void main(String[] args){
        int  addResult = addToNumber(2,2);
        double addDouble = addToDouble(4.3,6.26);
        System.out.println(addResult + " " +  "This is addition value");
        System.out.println(addDouble + " " + "This is double Value");
    }
}