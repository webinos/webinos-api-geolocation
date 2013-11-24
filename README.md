# webinos geolocation API #

**Service Type**: http://www.w3.org/ns/api-perms/geolocation

The geolocation API is based on W3C geolocation.


## Installation ##

To install the geolocation API you will need to npm the node module inside the webinos pzp.

For end users, you can simply open a command prompt in the root of your webinos-pzp and do: 

	npm install https://github.com/webinos/webinos-api-geolocation.git

For developers that want to tweak the API, you should fork this repository and clone your fork inside the node_module of your pzp.

	cd node_modules
	git clone https://github.com/<your GitHub account>/webinos-api-geolocation.git
	cd webinos-api-geolocation
	npm install


## Getting a reference to the service ##

To discover the service you will have to search for the "http://www.w3.org/ns/api-perms/geolocation" type. Example:

	var serviceType = "http://www.w3.org/ns/api-perms/geolocation";
	webinos.discovery.findServices( new ServiceType(serviceType), 
		{ 
			onFound: serviceFoundFn, 
			onError: handleErrorFn
		}
	);
	function serviceFoundFn(service){
		// Do something with the service
	};
	function handleErrorFn(error){
		// Notify user
		console.log(error.message);
	}

Alternatively you can use the webinos dashboard to allow the user choose the geolocation API to use. Example:
 	
	webinos.dashboard.open({
         module:'explorer',
	     data:{
         	service:[
            	'http://www.w3.org/ns/api-perms/geolocation'
         	],
            select:"services"
         }
     }).onAction(function successFn(data){
		  if (data.result.length > 0){
			// User selected some services
		  }
	 });

## Methods ##

Once you have a reference to an instance of a service you can use the following methods:



## Links ##

- [Specifications](http://webinos.org/api/w3c/geolocation)
- [Examples](https://github.com/webinos/webinos-api-geolocation/wiki/Examples)

