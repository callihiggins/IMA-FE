const app = {

  apiUrl: 'https://sheetdb.io/api/v1/x8s3c680taot2',

  personTemplate: '<div class="entry">{{firstName}} {{lastName}} {{jobTitle}}</div>',

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

  getTheData: () => {
    fetch(app.apiUrl)
    .then(response => response.json())
    .then (response => {
      response.forEach(entry => {
          // render the template with the data
          const data = {
            firstName: entry.firstName,
            lastName: entry.lastName,
            jobTitle: entry.jobTitle
          }
          const rendered = Mustache.render(app.personTemplate, entry);
          // add the element to the container
          $('.container').append(rendered);
      })
    });
  },
}