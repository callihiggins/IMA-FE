const app = {
  initialize: function () {
    $('.listSpaceMembers').click(function (e) {
      app.fetchSpaceMembers();
    });

  },

  fetchSpaceMembers: function() {
    $.ajax({
      url: 'http://api.open-notify.org/astros.json',
      dataType: 'json',
      success: data => {
        debugger;
        app.revealSpaceMembers(data);
      }, 
      error: msg => {
        console.log(msg)
      }
    })
  },

  revealSpaceMembers: function (data) {
    $('.spaceMembers').html(`There are ${data.number} people in space right now`);
  },
}