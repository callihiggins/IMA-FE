const app = {

  apiUrl: 'https://sheetdb.io/api/v1/x8s3c680taot2',

  initialize: () => {
  //  app.loadTemplate();
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
      debugger;
      response.forEach(entry => {
        debugger;
         app.renderTemplate(entry);
      })
    });
  },

  renderTemplate: entry => {
    const template = $('#personTemplate').html();
    const data = {
      firstName: entry.firstName,
      lastName: entry.lastName,
      jobTitle: entry.jobTitle
    }
    debugger;
    const rendered = Mustache.render(template, data);
    $('.container').append(rendered);
  },

}