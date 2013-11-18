import net.sf.json.JSON;
import net.sf.json.JSONSerializer;
import net.sf.json.xml.XMLSerializer;


public class Main {
	
	public static void main(String[] args) {
		String xml = "";
		XMLSerializer xmlSerializer = new XMLSerializer();  
		JSON json = xmlSerializer.read( xml );  
		System.out.println("asd");
	}

}
