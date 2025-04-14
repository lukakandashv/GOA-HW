                
import java.util.Random;

public class RandomNumberGenerator {
    public static void main(String[] args) {
        Random rand = new Random();
        int randomNumber = rand.nextInt(10); // Generates a random number between 0 and 9
        System.out.println("Random Number: " + randomNumber);
    }
}      
            