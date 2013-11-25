import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.Form;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

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
		
		convertAndPostFilesFromPathToURL("/Users/esben/Downloads/debates/", "http://politicsmapper.cloudapp.net:9200/debates/");	    
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
	
	private static String readXMLFile(File path) throws IOException
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
	
	private static void convertAndPostFilesFromPathToURL(String path, String url)
	{
		File xmlPath = new File(path);
		File[] files = xmlPath.listFiles();
		for (int i=0;i<files.length;i++){
			if (files[i].isFile()){
				try {
					String indexString = Integer.toString(i);
					JSONObject json = xmlToJson(readXMLFile(files[i]));
					System.out.println(json.toString());
					postJSON(json, url.concat(indexString));
					System.out.printf("%d%%\n", (int)(((i+1)/(double)files.length)*100.0));
					//System.out.println(xmlToJson(readXMLFile(files[i])));
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
			}
			
			
		}
	}
	
	private static void postJSON(JSONObject json, String url) 
	{
		Response postResponse =
				ClientBuilder.newClient().target(url).request(MediaType.APPLICATION_JSON_TYPE)
		                .put(Entity.entity(json.toString(), MediaType.APPLICATION_JSON_TYPE));
		
		System.out.println(postResponse.getStatus());
		System.out.println(postResponse.readEntity(String.class));
	}
}
