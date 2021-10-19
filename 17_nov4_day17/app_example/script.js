const app = {

  newTextColor: 'white',

  initialize: function () {

    document.getElementById('bgColor').addEventListener('click', () => {
      this.changeBackgroundColor()
    });

    document.getElementById('textColor').addEventListener('click', () => {
      app.changeTextColor()
    });
  },

  changeBackgroundColor: function() {
    document.body.classList.add('redBackground');
  },

  changeTextColor: function() {
    document.body.style.color = this.newTextColor;
  }
}