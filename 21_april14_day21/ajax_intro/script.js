const app = {
  initialize: function () {
    $('.listSpaceMembers').click(function () {
      app.fetchSpaceMembers();
    });

  },

  fetchSpaceMembers: function() {
    $.ajax({
      url: 'http://api.open-notify.org/astros.json',
      dataType: 'json',
      success: data => {
        app.revealSpaceMembers(data);
      }
    })
  },

  revealSpaceMembers: function (data) {
    $('.spaceMembers').html(`There are ${data.number} people in space right now`);
  },
}