var app = {

	//A place to set up listeners or kick off an initial function
	initialize: function() {
		//Start the auth procuess by using my id and secret to get an access token
		app.getToken();
	},

	//This first ajax call uses my id and secret that I obtained from spotify to get
	//an access token that is good for one hour
	getToken: function(word) {
		var id = 'd2eb59a247224506b822512d979a2f5f';
		var secret = '7abe06724e1c451e92e97e96b72ad7cc';
		//this base encodes your id and secret to pass to the spotify server
		var encoded = btoa(id + ':' + secret);

		fetch('https://accounts.spotify.com/api/token',
		  {
		    method: "POST",
		    headers: {
		    	'Authorization': 'Basic ' +  encoded,
					'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
		    },
		    body: 'grant_type=client_credentials'
		})
		.then(result => result.json())
		.then(result => {
			//after I get my access token, I use it to search for a spotify track
			app.searchTracks(result.access_token);
		});
		
	},

	//This is the search to spotify's track api, with the token in an authorization header
	searchTracks: function(token) {
		fetch('https://api.spotify.com/v1/tracks/3kW6TmJZY1jLf1PXlLdANt', 
		 	{
        dataType: "json",
        headers: {
					"Content-Type": "application/json",
					"Authorization": "Bearer " + token
				},
			})
		.then(response => response.json())
		.then(data => {
				debugger;
					var trackName = data.name;
					var audioElement = document.createElement('audio');
					audioElement.src = data.preview_url;
					audioElement.autoplay = 'true';
					audioElement.controls = 'true';
					$('.title').html(trackName);
					$('.the-track').html(audioElement);
					
			})
			.catch(console.log("Error retrieving spotify API"));
	}
};

