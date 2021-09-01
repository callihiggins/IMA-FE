const app = {

  apiUrl: 'https://sheetdb.io/api/v1/x8s3c680taot2',

  initialize: function() {
    this.getTheData();
    this.attachListeners();
  },

  attachListeners: function() {
    $('.submit').click(e => {
      this.addSomeone();
    })
  },

  addSomeone: function() {
    const data = {
      firstName: $('.firstName').val(),
      lastName: $('.lastName').val(),
      jobTitle: $('.jobTitle').val(),
    };

    const requestBody = {data: [data]};

    fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(response => {
      debugger;
    })
  },

  getTheData: function () {
    fetch(this.apiUrl)
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