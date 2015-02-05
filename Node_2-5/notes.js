
// ASYNC PARADIGM --->
	function() {
		//do some stuff;
		getData(cb);
	};

	function cb(res) {
		//process res.data;
	};

// SYNCHRONOUS PARADIGM --->
	function() {
		//do some stuff;
		var data = getData();
		//process data;
	};

		//node has an advantage over all other 
		//server-side languages (rails, python, php, .net, and java)
		//because it is ASYNCHRONOUS. A request doesn't have to wait for response
		//before running other tasks.

HTTP calls --->
	Header:
		method: [Get, Post (create), Put (update), Delete], Head, Options, Patch
		status-code: 2xx (200) means OK/ 3xx is about security, 4xx (404) 'i dont have that', 5xx (500)= error.
		content-type:
	Body:
	Cookies: (name/value pairs): users
									user/
										name
										username
										pwd
										address

asynchronous === non-blicking i/o

*Dont forget that ctrl-c will close your server. Works for both node and http-server.





 