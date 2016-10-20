import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import org.json.JSONException;
import org.json.JSONObject;

@Path("/usdtoinreurkwd")
public class usdtoinreurkwd {
	

	  @Path("{f}")
	  @GET
	  @Produces("application/json")
	  public Response convertFtoCfromInput(@PathParam("f") float usd) throws JSONException {

		JSONObject jsonObject = new JSONObject();
		double	 inr,eur,kwd;
		inr =  usd*66.65; 
		eur =  usd*0.91; 
		kwd =  usd*0.30; 
		jsonObject.put("USD", usd); 
		jsonObject.put("INR", inr);
		jsonObject.put("EUR", eur);
		jsonObject.put("KWD", kwd);

		String result = "" + jsonObject;
		return Response.status(200).entity(result).build();
	  }
}
