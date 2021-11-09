const app = {

  data: detailedBandObject, //this comes from my data.js files

  initialize: () => {
    $('.box').click(e => {
      $(e.currentTarget).toggleClass('transform')  
    });

    $('.circle').dblclick(e => {
      $(e.currentTarget).toggleClass('moveMe')      
    });

    $('.listBeatles').click(function () {
      app.listBeatles();
    })

    $('.compareBands').click(function () {
      app.compareBands();
    })
  },

  listBeatles: () => {
    // in this instance can also use this.data, it means the same thing. app.data is safer
    app.data.beatles.albums.forEach(album => {
      debugger;
      $('.beatlesAlbums').append(`<li>${album.name}, ${album.year}</li>`);
    });
  },

  compareBands: () => {
    const nirvanaMembers = app.data.nirvana.members;
    const beatlesMembers = app.data.beatles.members;

    $('.bandsComparison').text(
      `${nirvanaMembers.length > beatlesMembers.length ? 'Nirvana' : 'Beatles'} 
    had more members`);
  }
}