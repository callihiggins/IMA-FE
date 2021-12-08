const app = {
  initialize: () => {
    
    app.fetchBeatles();
    
    $('.listSpaceMembers').click(function (e) {
      app.fetchSpaceMembers();
    });

  },

  fetchBeatles: () => {
    fetch('data.json')
      .then(response => response.json())
      .then(response => {
        debugger;
      })
  },

  fetchSpaceMembers: () => {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(response => app.revealSpaceMembers(response))
      .catch(error => console.log(error));
  },

  revealSpaceMembers: response => {
    $('.spaceMembers').html(`There are ${response.number} people in space right now`);
  },
}