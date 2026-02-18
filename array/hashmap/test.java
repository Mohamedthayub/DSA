import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {

        HashMap<Integer, Integer> numbers = new HashMap<>();
        numbers.put(1, 10);
        numbers.put(2, 10);
        numbers.put(3, 10);
        
        HashMap <String,Integer> people = new HashMap<>();
        
        people.put("thayub", 20);
        people.put("mohideen",19);
        people.put("halik",25);

        
        for(Map.Entry<String,Integer> person : people.entrySet()){
            System.out.println(person.getKey() + " -> " + person.getValue());
        } 
    }
}
