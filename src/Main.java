import net.sf.json.JSON;
import net.sf.json.JSONSerializer;
import net.sf.json.xml.XMLSerializer;


public class Main {
	
	public static void main(String[] args) {
		
		/* Todo: 
		 * 
		 * Read xml files from files system
		 * Convert to json objects
		 * Find library (jersey?) to send http requests with the json data to elastic search
		 * 
		 * Note: elastic search cluster running on politicsmapper.cloudapp.net port: 9200
		 */
		
		String xml = "";
		
		
		XMLSerializer xmlSerializer = new XMLSerializer();  
		JSON json = xmlSerializer.read( xml );
	}

}
