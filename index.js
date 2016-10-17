const http = require("http"); 
const fs = require("fs"); 
const querystring = require("querystring");

function onRequest(request, response) { 
    
    if (request.url === '/') { 
//render form
	} else if (request.url === '/add') { 

//add location to db
        
    }
} 

http.createServer(onRequest).listen(4000); 
console.log("Server has started on port 4000.");
