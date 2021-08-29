package examples;

public class myfirstjava {

	public static void message(String myString, int myInt) {
		System.out.println("This is my String: " + myString);
        System.out.println("This is my Int: " + myInt);
	}
	
	public static void main(String[] args) {
		message("What a cool string", 34);
	}
}