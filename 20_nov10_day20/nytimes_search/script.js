

var app = {
	nyTimesArticles : [],

	initialize: function() {
		app.getNYTimesData();
	},

	makeHTML: function() {
		var theHTML = '';
		for (var i = 0; i < app.nyTimesArticles.length; i++){
			theHTML += "<div class='nytArticle'>";
			theHTML += "<h3>" + app.nyTimesArticles[i].headline.main + "</h3>";
			theHTML += "</div>";
		}
		$('.container').html(theHTML);
	},

	getNYTimesData: function() {
		console.log("Get NY Times Data");
		var currentSearchWord = 'biden';
		var nyTimesURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + currentSearchWord + '&page=0&sort=newest&api-key=';
		var myNYKey = 'E0Jowl0MxvI4RRWnjChL1eFDPwhbj3EE';
		var nyTimesReqURL = nyTimesURL + myNYKey;
		console.log(nyTimesReqURL);
		fetch(nyTimesReqURL)
		.then(response => response.json())
		.then(data => {
			debugger;
			app.nyTimesArticles = data.response.docs;
			console.log(app.nyTimesArticles);
			app.makeHTML();
		})
		.catch(error => console.log(error));
	}
};