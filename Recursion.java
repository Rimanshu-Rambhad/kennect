
public class Recursion {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
			Recursion r=new Recursion();
			int a=r.sum(10
					);
			System.out.println("Sum of first N natural no's:" +a);
			
	}
	
	int sum(int b)
	{
			if(b>0)
			{
				return b+sum(b-1);
			}
			else
			{
				return 0;
			}
			
	}

}
