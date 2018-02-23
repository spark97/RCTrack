module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'rc-track' );


const dhoni_records = [
	"Dhoni is the only captain to win all 3 ICC trophies",
	"Dhoni has played the most number of matches as captain",
	"Dhoni is the fastest player in T20 history to score 1000 runs without scoring a 50",
	"Dhoni has the record for highest score by a wicket-keeper"
]

const sachin_records = [
	"Sachin has the highest centuries in ODIs",
	"Sachin has played the most number of ODIs",
	"Sachin has the longest ODI career",
	"Sachin has the most ODI centuries"
]

const kohli_records = [
	"Kohli has the fastest ODI hundred for India",
	"Kohli is the first batsman to score 4 double centuries in 4 consecutive test series",
	"Kohli has the most number of centuries while chasing",
	"Kohli is the first captain to hit six ODI centuries in a calendar year."
]

var number_records = 4;

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
	var ind = Math.floor((Math.random() * (number_records-1)) + 1);
	if(name=="dhoni"){
		reply = dhoni_records[ind];
	}
	else if(name=="kohli"){
		reply = kohli_records[ind];
	}
	else if(name="sachin"){
		reply = sachin_records[ind];
	}
	response.say(reply);
}
);

module.exports = app;