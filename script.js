// Script for dynamically loading in athlete information

$('.profile').click(function(){	
	// Array locator
	var arrayLoc = $(this).attr('id');


	// AJAX JS FOR PHASE 2
	$.getJSON('../teamjson.json', function(data){
		// Get team 3 letter string
		var team = window.location.href.substring(window.location.href.length - 8);
		team = team.substring(0, 3);
		team = team.toLowerCase();
		
		// Start creating output
		var output = '<p class="quote center">';
		var name = "data.teams." + team + ".member[" + arrayLoc + "].name";
		var bio = "data.teams." + team + ".member[" + arrayLoc + "].bio";

		output += eval(name);

		output += '</p><br />';

		output += '<p class="para">';

		output += eval(bio);

		output += '</p>';

		// Send output to element on page
		$('#textcontainer').html(output);
	});

	//FADING JS
	$('div > .profile').fadeTo('slow', 1.0);
	$('div > .profile').not(this).fadeTo("slow", 0.40);
});


$(function(){
	$( "#accordion" ).accordion({
    	heightStyle: "content"
	});
});


/*
window.onload = function(){
	var request;

	if(window.XMLHttpRequest){
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject('Microsoft.XMLHTTP');
	}

	request.open("GET", "../teamjson.json");

	request.onreadystatechange = function(){
		if((request.readyState === 4) && (request.status === 200)){
			var items = JSON.parse(request.responseText);
			var output = '<ul>';

			for(var key in items){
				output += '<li>' + items[key].name + '</li>';
			}

			output += '</ul>';

			document.getElementById('textcontainer').innerHTML = output;
		}
	}

	request.send();
}
*/