public class Main{
    public static void main(String[] args){
        String name = "Hello";
        System.out.println(name.length()); // to get a string length;

        System.out.println(name.charAt(1)); // to get a one character from a string;
        String name2 = "Hello"; 

        System.out.println(name.equals(name2)); // to check two string are equal  

        System.out.println(name.contains("hello")); // to check  the  string having the value 

        String space = " value ";
        String newValue = space.trim(); // remove the extra space in the string .
        System.out.println(newValue.length());

        String UpperCase  = "this is upperCase";
        System.out.println(UpperCase.toUpperCase()); // to convert uppercase string

        String lowerCase = "ThIS IS LOWERCASE";
        System.out.println(lowerCase.toLowerCase()); // to convert  lowercase string


        String words = "this are all words";
        String[] result = words.split(" "); // convert the string to array  
        System.out.println(result.length);
    }
}