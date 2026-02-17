import java.util.HashMap;
public class Main{
    public static void main(String[] args){
        System.out.println("I am Learning HashMap...");
        HashMap <String, String> names = new HashMap<>();

        
        names.put("firstName","mohideen");
        names.put("lastName" , "thayub");
        names.put("address", "42a/5 south thaikka street"); //  add the  value into  hashmap;
        names.put("age","20");

        System.out.println(names.get("age")); //  get the value from the hashmap ;

        System.out.println(names.get("summa")); //  if you access the wrong key you will get null ;
        
        System.out.println(names.containsKey("age")); //  check if the key is available return true otherwise return false ;
        
        System.out.println(names.containsValue("thayub")); //  check if the value is available return true otherwise return false ;
        
        names.remove("age"); //  remove the value with key  

        System.out.println(names.size()); //  to know what is the size of the hashmap

        if(names.isEmpty()){ //  check if tha map value it  will return true  otherwise it will return false;

            System.out.println("It is Empty");  
        }        
        else{
            System.out.println("It is not Empty" + " " + "the size is :" + " " + names.size());
        }


        names.clear(); // clear the hashmap value 

        names.put(10, names.getOrDefault(10,0) + 1); // getOrDefault function use to set the default value in hashmap
        
        System.out.println(names);
        


        HashMap <Integer,Integer> summa = new HashMap<>();
        summa.put(1,11);
        summa.put(2,22);
        System.out.println(summa);
        
    }
}

/*

📌 Syntax:
HashMap<KeyType, ValueType> map = new HashMap<>();

*/
