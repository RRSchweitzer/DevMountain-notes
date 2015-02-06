XMR = XML HTTP Request;

Most servers serve two purposes: recieving and sending files, and an API for sending data.

Don't use CDN's in your server. Download the files and store them in your server. 
It takes time to load libs on a server. Server is home-base, 
you shouldn't outsource anything from it.

when you share with others on github, include your server.js file and list the npm 
modules you used in your node project.'

When to route with angular and when to route with node:::::::::
	-usually put '/api/' when routing with json in node.
	-just do # routing, don't do html5 routing.