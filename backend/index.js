const http = require('http');
var NodeGeocoder = require('node-geocoder');

var options = {
	provider: 'google',
   
	// Optional depending on the providers
	httpAdapter: 'https', // Default
	apiKey: 'AIzaSyApyceFcUCDm2E1AOirTE2dZjo2xkhGWTk', // for Mapquest, OpenCage, Google Premier
	formatter: null         // 'gpx', 'string', ...
  };

var geocoder = NodeGeocoder(options);

// Using callback

function test_send(address){
geocoder.geocode(address, function(err, res) {

	//extract geolocation 
	var lng_mg =  extract_lngtide_magtitide(res);

	
	
	console.log(lng_mg);
  });
}

function extract_lngtide_magtitide(res){

		
	return 1;
}

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hello World!");
	
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
