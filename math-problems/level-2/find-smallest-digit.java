public class Main{
    public static void main(String[] args){
        int num = 12345;
        int smallest = num % 10;
        while(num > 0){
            int lastdigit = num % 10;
            if(lastdigit < smallest){
                smallest =  lastdigit;
            }
            num = num / 10;
        }
        
        System.out.println(smallest);
    }
}

/*
17. Find smallest digit
n = 58392

Output:

2
*/