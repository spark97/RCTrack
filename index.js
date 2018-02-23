module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'rc-track' );


const dhoni_records = [
	"Dhoni is the only captain to win all 3 ICC trophies"
]

const sachin_records = [
	"Sachin has the highest centuries in ODI"
]

const kohli_records = [
	"Kohli has the fastest ODI hundred for India"
]



app.launch( function( request, response ) {
	response.say( 'Welcome to your test skill' ).reprompt( 'Way to go. You got it to run. Bad ass.' ).shouldEndSession( false );
});


app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);	
	response.say( 'Sorry an error occured ' + error.message);
};

app.intent('getPrice',
{
	"slots":{"name":"string"}
	,"utterances":[ 
	"tell me records of dhoni",
	"tell me records of kohli",
	"tell me records of sachin",
	]
},
function(request,response){
	var name = request.slot('name');
	var reply = "";
	if(name=="dhoni"){
		reply = dhoni_records[0];
	}
	else if(name=="kohli"){
		reply = kohli_records[0];
	}
	else if(name="sachin"){
		reply = sachin_records[0];
	}
	response.say(reply);
}
);

module.exports = app;