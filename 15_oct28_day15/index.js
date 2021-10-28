
/*------------------------------------------------//
Looping over arrays
//------------------------------------------------*/

const firstNames = ['john', 'paul', 'george', 'ringo'];
const lastNames = ['lennon', 'mccartney', 'harrison', 'starr'];

const howManyBeatles = names => {
	return names.length;
};

const printNames = function(names) {

	for (let i = 0; i < names.length; i++) {
		if (names[i] === 'john') {
			console.log(names[i]);
		}

	}
};

/*------------------------------------------------//
Looping over simple objects
//------------------------------------------------*/

const simpleBeatlesObject = {
	'guitar': 'John Lennon',
	'bass': 'Paul McCartney',
	'name': 'George Harrison',
	'drums': 'Ringo Starr'
};

const printNames = () => {
	for (person in simpleBeatlesObject) {
		console.log(simpleBeatlesObject[person]);
	}
}

const whoPlayedDrums = () => {
	return simeBeatleObject.drums;
}

/*------------------------------------------------//
Looping over more complex objects
//------------------------------------------------*/

const detailedBandObject = {
	'beatles' : {
		'members' : ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'],
		'years-active': '1960 - 1970',
		'albums': [
			{
				'name': 'Please Please Me',
				'year': '1963',
			},
			{
				'name': 'With the Beatles',
				'year': '1963',
			},
			{
				'name': 'A Hard Day\'s Night',
				'year': '1964',
			},
			{
				'name': 'Beatles for Sale',
				'year': '1964',
			},
			{
				'name': 'Help!',
				'year': '1965',
			},
			{
				'name': 'Rubber Soul',
				'year': '1965',
			},
			{
				'name': 'Revolver',
				'year': '1966',
			},
			{
				'name': 'Sgt. Pepper\s Lonely Hearts Club Band',
				'year': '1967',
			},  
			{
				'name': 'The White Album', 
				'year': '1968',
			},     
			{
				'name': 'Yellow Submarine',
				'year': '1969',
			},
			{
				'name': 'Abbey Road',
				'year': '1969',
			},
			{
				'name': 'Let It Be',
				'year': '1970',
			}
		]
	}
};

const listBeatlesAlbums = () => {
	const albums = detailedBandObject.beatles.albums;
	for (let i = 0; i < albums.length; i++) {
		debugger;
		console.log(albums[i].name);
  }

  //OR
  
  albums.forEach(album => console.log(album.name))
}

/*------------------------------------------------//
Looping over even more complex objects
//------------------------------------------------*/

const detailedBandObject = {
	'beatles' : {
		'members' : ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'],
		'years-active': '1960 - 1970',
		'albums': [
			{
				'name': 'Please Please Me',
				'year': '1963',
			},
			{
				'name': 'With the Beatles',
				'year': '1963',
			},
			{
				'name': 'A Hard Day\'s Night',
				'year': '1964',
			},
			{
				'name': 'Beatles for Sale',
				'year': '1964',
			},
			{
				'name': 'Help!',
				'year': '1965',
			},
			{
				'name': 'Rubber Soul',
				'year': '1965',
			},
			{
				'name': 'Revolver',
				'year': '1966',
			},
			{
				'name': 'Sgt. Pepper\s Lonely Hearts Club Band',
				'year': '1967',
			},  
			{
				'name': 'The White Album', 
				'year': '1968',
			},     
			{
				'name': 'Yellow Submarine',
				'year': '1969',
			},
			{
				'name': 'Abbey Road',
				'year': '1969',
			},
			{
				'name': 'Let It Be',
				'year': '1970',
			}
		]
	},
	'nirvana': {
		'members' : ['Kurt Cobain', 'Dave Grohl', 'Krist Novoselic'],
		'years-active': '1987–1994',
		'albums': [
			{
				'name': 'Bleach',
				'year': '1989',
			},
			{
				'name': 'Nevermind',
				'year': '1991',
			},
			{
				'name': 'In Utero',
				'year': '1993',
			}
		]
	}
};

const whoHadMoreMembers = function () {
	const nirvanaMembers = detailedBandObject.nirvana.members;
	const beatlesMembers = detailedBandObject.beatles.members;

	if (nirvanaMembers.length > beatlesMembers.length) {
		console.log('Nirvana had more band members')
	} else {
		console.log('The Beatles had more band members')
	}
}
