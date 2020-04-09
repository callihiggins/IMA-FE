const app = {

  data: detailedBandObject, //this comes from my data.js files

  initialize: function () {
    $('.box').click(function () {
      $(this).toggleClass('transform')      
    });

    $('.circle').dblclick(function () {
      $(this).toggleClass('moveMe')      
    });

    $('.listBeatles').click(function () {
      app.listBeatles();
    })

    $('.compareBands').click(function () {
      app.compareBands();
    })
  },

  listBeatles: function () {
    // can also this this.data, it means the same thing. app.data is safer
    app.data.beatles.albums.forEach(album => {
      $('.beatlesAlbums').append(`<li>${album.name}, ${album.year}`);
    });
  },

  compareBands: function () {
    const nirvanaMembers = app.data.nirvana.members;
    const beatlesMembers = app.data.beatles.members;

    $('.bandsComparison').text(`${nirvanaMembers.length > beatlesMembers.length ? 'Nirvana' : 'Beatles'} have more members`);
  }
}