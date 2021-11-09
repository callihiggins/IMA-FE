const app = {

  data: detailedBandObject, //this comes from my data.js files

  initialize: () => {
    $('.box').click(function () {
      // When jQuery calls a handler, the this keyword is a reference to the element
      // where the event is being delivered; for directly bound events this is the element
      // where the event was attached and for delegated events this is an element matching selector.
      // (Note that this may not be equal to event.target if the event has bubbled from a descendant element.)
      // To create a jQuery object from the element so that it can be used with jQuery methods, use $( this ).
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

  listBeatles: () => {
    // in this instance can also use this.data, it means the same thing. app.data is safer
    app.data.beatles.albums.forEach(album => {
      debugger;
      $('.beatlesAlbums').append(`<li>${album.name}, ${album.year}</li>`);
    });
  },

  compareBands: function () {
    const nirvanaMembers = app.data.nirvana.members;
    const beatlesMembers = app.data.beatles.members;

    $('.bandsComparison').text(
      `${nirvanaMembers.length > beatlesMembers.length ? 'Nirvana' : 'Beatles'} 
    have more members`);
  }
}