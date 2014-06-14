jQuery(document).ready(function() {

	var url = "https://api.instagram.com/v1/media/popular?client_id=8db260d5c5714b149209ec9a453b8258"
	
	$.ajax({
		method: "GET",
 		url: url,
 		dataType: "jsonp", 				// all this info is in jsonp type
 		success: function(data){
 			//console.log(data);
 			//console.log(data.data.length);
 			for (var i = 0; i < data.data.length; i++) {
 				//console.log(i);
 				
 				var instaImageSrc = data.data[i].images.low_resolution.url;
 				var instaImage = "<img src='" + instaImageSrc + "' alt='#' />";
 				jQuery("body").append(instaImage);
 				
 				//console.log(data.data[i].images.low_resolution.url);
 			} // for loop end
 		}, //success
  		
 		
 		error: function(jqXHR, textStatue, errorThrown){
 			console.log("Check your Internet Connection");
 		} //error
	}); //ajax method end
	

}); //ready method end