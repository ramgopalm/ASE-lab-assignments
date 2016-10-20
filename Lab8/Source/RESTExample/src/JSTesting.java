import static org.junit.Assert.*;

import org.junit.Test;


public class JSTesting {
	usdtoinr conversion = new usdtoinr();
	double result = conversion.convert(10);
	
	double Expectedoutput = 665;

	@Test
	public void testSum() {
		System.out.println("@Test Conversion(): " + result + " = " + Expectedoutput);
		assertEquals(result, Expectedoutput,0);		
	}
}
