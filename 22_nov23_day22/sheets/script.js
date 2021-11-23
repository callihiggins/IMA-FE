const app = {

  apiUrl: 'https://sheetdb.io/api/v1/x8s3c680taot2',

  initialize: () => {
    app.getTheData();
    app.attachListeners();
  },

  attachListeners: () => {
    $('.submit').click(e => {
      app.addSomeone();
    })
  },

  addSomeone: () => {
    const data = {
      firstName: $('.firstName').val(),
      lastName: $('.lastName').val(),
      jobTitle: $('.jobTitle').val(),
    };

    const requestBody = {data: [data]};

    fetch(app.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(response => {
      app.getTheData();
    })
  },

  getTheData: function () {
    fetch(app.apiUrl)
    .then(response => response.json())
    .then (response => {
      response.forEach(entry => {
        $('.container').append(
          `<div class="entry">${entry.firstName} ${entry.lastName}, ${entry.jobTitle}</div>` 
        )
      })
    });
  }

}