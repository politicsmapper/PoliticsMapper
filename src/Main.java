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
	
	public static void main(String[] args) {
		
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
		try {
			String xmlString = readXMLFile("C:/Users/Anuz/Desktop/primary-toc.xml");
			System.out.println(xmlToJson(xmlString));
		} catch (IOException exception) {
			System.out.println("Something went wrong");
			System.out.println(exception);
		}
		
		
	    
	}
	
	private static JSONObject xmlToJson(String xmlString)
	{
		try {
			JSONObject xmlToJSON = XML.toJSONObject(xmlString);
			return xmlToJSON;
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace(); 
		}
		return null;
	}
	
	private static String readXMLFile(String path) throws IOException
	{
		BufferedReader reader = new BufferedReader( new FileReader (path));
	    StringBuilder stringBuilder = new StringBuilder();
	    String line = null;
	    String lineSeparator = System.getProperty("line.separator");
	    while((line = reader.readLine())!= null) {
	        stringBuilder.append(lineSeparator);
	        stringBuilder.append(line);   
	    }
	    reader.close();
	    return stringBuilder.toString();
	}
}
