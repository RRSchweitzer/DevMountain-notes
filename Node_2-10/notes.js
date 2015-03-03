// Dan's Review --->
var list = ['string', 'thing', 'this'];

app.get('/node', function(req, res) {
	res.status(200).json(list);	
});

app.post('/node', function(req, res) {
	list.push(req.body);
	res.status(200).json(list);
});

app.put('/node', function(req, res) {
	for (var i = 0; i < list.length; i++) {
		if (list[i].id === req.body.id) {
			list[i] = req.body;
		}
	};
});

app.delete('/node', function(req, res) {
	for (var i = 0; i < list.length; i++) {
		if (list[i].id === req.body.id) {
			list.splice(i, 1);
		}
	};
});

// Cahlan's Review --->
HTTP: a protocol/description for how web communication occurs.
	-verbs: GET, POST, PUT, DELETE, OPTIONS.
	-contains: headers: (Content-Type application/json), methods: (see above), body, 
	status code: (200, 400, etc.)
	-port 80.
	-https is an encrypted version of http. port 443.

CORS: makes is so you define the only urls who can make requests to your api.

JavaScript vs node.js:
	-browser/'vanilla' javascript has access to the DOM.
	-node.js has access to the file system, database, port connections.

REST:
	-when php was king and everyone used it, and APIs actually became a thing, 
	there were all kinds of api designs. URLs were way messy b/c they wrote all 
	the queries iside it and crazy stuff. REST just uses HTTPs already existing 
	verbs/methods. REST APIs are the current favorite in web development. 
	REST is: GET PUT POST DELETE.

Express:
	-is a framework/library/thing in node that makes our life easier.
	-middleware: is a preprocessor for web requests. Ex: authentication.

Routing: client vs server:
	-Angular: to change views in the browser-side of your applicaiton. 
	Routing in angular is smoke and mirrors. You make the user feel like 
	they have gone to a different URL but they are in-fact on the same index.html.
	-Node: dynamic/API routes, or static asset routes.
	

