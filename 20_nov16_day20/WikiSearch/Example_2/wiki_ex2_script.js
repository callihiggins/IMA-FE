var app = {
	//Define the url for the wikipedia API call
	wikiURL: "https://en.wikipedia.org/w/api.php",
	//Define an intial search term
	currentWord: "dogs",

	initialize: function() {
		app.searchWikipedia(app.currentWord);
	},

	//Define a funnction to execute the Fetch call
	//The argument will be the desired search term
	searchWikipedia: function(word) {
		// https://www.mediawiki.org/w/index.php?title=API:Opensearch
		var params = {
			action: "opensearch",
			search: word,
			format: "json",
			origin:  '*'
		};
		// Tell the API its ok to make cross-origin requests
		let url = app.wikiURL + "?origin=*";

		//Turn the params object into a string of key/value pairs
		Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

		fetch(url)
		.then(function(response){return response.json();})
		.then(function(response) {
			//Check the browser console to see the returned data
			console.log(response);
			//Use jQuery to insert the search term into the appropriate DOM element
			//The data we want is the first item in the returned JSON, hence value "0"
			$("#searchTerm").html(response[0]);
			//The data we want is the second item in the returned JSON, hence value "1"
			//Create a var to save the array of search results 
			var searchResults = response[1];
			//Loop through the array of results
			for (var i = 0; i < searchResults.length; i++){
				var htmlString = `<p class='wikiResults'>${searchResults[i]}</p>`;
				//Use jQuery's append() function to add the searchResults to the DOM
				$("#results").append(htmlString);
			}
		})
		.catch(function(error){
			console.log("We got problems");
			console.log(error);
		});
	}
}
