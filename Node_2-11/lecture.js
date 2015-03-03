Passport ---> authentication

-identifying a client with our server.

stateless: every request sent through http is sent as if it were the first request.

HTTP/basic authentication (outdated): identifies a user through an http call.
	'https://username:password@localhost/something...'
		 ^ encrypts the url so that its more secure.

Form authentication: what were used to seeing on a login page. User credentials 
get saved in cookies and are sent with every request.
	-problem: how do this with API?
	-dont want to redirect browser everytime something changes

Oath:
	-lets you authenticate with an API in 3rd party applications.
	-kind of a virtual cookie that travels around with the API.
	-uses tokens with an expiration date.
	-http://localhost:8080 === http://127.0.0.1:8080





