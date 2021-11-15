var app = {
	wikiURL: "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=",

	initialize: function() {
		//Use jQuery to assign a callback function when the 'search' button is clicked
		$("#search").click(function(){
			console.log("Clicked search");
			//Clear the div
			$("#results").html("");
			//Use jQuery to get the value of the 'query' input box
			var newSearchTerm = $("#query").val();
			console.log(newSearchTerm);
			//Execute the Wikipedia API call with the 'newSearchTerm' string as its argument 
			app.searchWikipedia(newSearchTerm);
		});

		//What if someone just wants to click "ENTER"?
		//Use jQuery to assign a callback function when enter is pressed 
		//This will ONLY work when the 'query' input box is active
		$("#query").keypress(function(e){
			//console.log(e);
			//If enter key is pressed
			if (e.which == 13){
				//Use jQuery's trigger() function to execute the click event
				$("#search").trigger('click');
			}
		});
	},

	//Define a funnction to execute the Fetch call
	//The argument will be the desired search term
	searchWikipedia: function(searchTerm) {
		// https://www.mediawiki.org/w/index.php?title=API:Opensearch
		var params = {
			origin:  '*',
			action: "opensearch",
			search: searchTerm,
			format: "json"
		};
		// Tell the API its ok to make cross-origin requests
		let url = app.wikiURL + "?origin=*";

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
				var urlResults = response[3];
				//Loop through the array of results
				for (var i = 0; i < searchResults.length; i++){
			//		debugger;
					var htmlString =	
						`<p class='wikiResults'>
							<a href=${urlResults[i]}>${searchResults[i]}</a>
						</p>`;
					//Use jQuery's append() function to add the searchResults to the DOM
					$("#results").append(htmlString);
				}
			})
			.catch(function(error){
				console.log("We got problems");
				console.log(error);
			});
		}
};
