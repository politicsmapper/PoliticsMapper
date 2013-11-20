import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import org.json.XML;
import org.json.JSONException;
import org.json.JSONObject;

import net.sf.json.JSON;
import net.sf.json.JSONSerializer;
import net.sf.json.xml.XMLSerializer;


@SuppressWarnings("unused")
public class Main {
	
	public static void main(String[] args) throws IOException {
		
		/* Todo: 
		 * 
		 * Read xml files from files system
		 * Convert to json objects
		 * Find library (jersey?) to send http requests with the json data to elastic search
		 * 
		 * Note: elastic search cluster running on politicsmapper.cloudapp.net port: 9200
		 */
		
		//String xml = "";
		//XMLSerializer xmlSerializer = new XMLSerializer();  
		//JSON json = xmlSerializer.read(xml);
		
		BufferedReader reader = new BufferedReader( new FileReader ("C:/Users/Anuz/Desktop/primary-toc.xml"));
	    StringBuilder stringBuilder = new StringBuilder();
	    String line = null;
	    String lineSeparator = System.getProperty("line.separator");
	    while((line = reader.readLine())!= null) {
	        stringBuilder.append(lineSeparator);
	        stringBuilder.append(line);   
	    }
	    reader.close();
	    String xmlToString = stringBuilder.toString();
	    System.out.println(xmlToString);
	    try {
			JSONObject xmlToJSON = XML.toJSONObject(xmlToString);
			System.out.println(xmlToJSON);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    
	}

}
