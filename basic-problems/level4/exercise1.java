public class Main{
    public static void main(String[] args){
        String name = "Mohamed Mohideen Thayub";
        int vowel_count = 0;
        for(int i = 0; i<name.length(); i++){
            char ch = Character.toLowerCase(name.charAt(i));
          if(name.charAt(i) == 'a' || name.charAt(i) == 'e' || name.charAt(i) == 'i' || name.charAt(i) == 'o' || name.charAt(i) == 'u'){
            vowel_count++;
          }
        }
        System.out.println(vowel_count);
    }
}
/*

1️⃣6️⃣ Count Vowels

Count vowels in a string

vowels ->  a, e, i, o, u.
*/



