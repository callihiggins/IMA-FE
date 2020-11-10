const app = {
  initialize: function () {
    $('.listSpaceMembers').click(function (e) {
      app.fetchSpaceMembers();
    });

  },

  fetchSpaceMembers: function() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(response => app.revealSpaceMembers(response))
      .catch(error => console.log(error));
  },

  revealSpaceMembers: function(response) {
    $('.spaceMembers').html(`There are ${response.number} people in space right now`);
  },
}