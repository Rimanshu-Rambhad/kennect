
import java.util.Scanner;
public class Switch {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int a=10,b=20,ch;
		System.out.println("Please Enter your choice");
		
		Scanner sc=new Scanner(System.in);
		ch=sc.nextInt();
		
		switch(ch)
		{
			case 1: System.out.println("Sum=" + (a+b));
			break;
			
			case 2: System.out.println("Subtraction=" + (a-b));
			break;
			
			case 3: System.out.println("Multiplication=" + (a*b));
			break;
			
			case 4: System.out.println("Division=2" + (a/b));
			break;
			
			default: System.out.println("Invalid Choice Entered");
				
		}
		System.out.println("out of switch!");

	}
}
