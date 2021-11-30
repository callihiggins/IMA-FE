const app = {

  apiUrl: 'https://sheetdb.io/api/v1/x8s3c680taot2',

  personTemplate: '', // gonna populate this by fetching the .mustache file

  initialize: async () => {
    // making sure we have templates loaded
    // before we try to populate them with data
    app.personTemplate = await app.loadTemplate();
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
        // render the template with the data
        const renderedResponse = Mustache.render(app.personTemplate, entry);
        // add the element to the container
        $('.container').append(renderedResponse);
      })
    });
  },
  
  loadTemplate: () => 
    // note that i don't have curly brackets here, which means i'm returning the value in the last then() function
    fetch('person.mustache')
      .then(response => response.text())
      .then(template => template)
}