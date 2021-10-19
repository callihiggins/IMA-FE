const app = {
  apiUrl: 'https://sheetdb.io/api/v1/9unb9sqh34nu3',

  initialize: function () {
    fetch(this.apiUrl)
    .then(response => response.json())
    .then(res => {
       debugger;
    });

    $('.button').click(e => {
      this.postNew();
    })
  },

  postNew: function () {

    const data = {
      firstName: $('.firstName').val(),
      lastName: $('.lastName').val()
    }
    
    const requestBody = {data: [data]}

    fetch(this.apiUrl, {
      method: 'POST',
      'headers': {
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify(requestBody),
      responseType: 'json'
    })
    .then(res => res.json())
    .then(res => {
      debugger;
    })
  }
}