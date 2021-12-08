const app = {
  initialize: () => {
   app.fetchDoggie();
  },

  fetchDoggie: () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(response => app.populateDoggie(response))
      .catch(error => console.log(error));
  },

  populateDoggie: response => {
    $('#doggie').attr('src', response.message);
  },
}