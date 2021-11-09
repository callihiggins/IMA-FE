const app = {

  submitButton: document.getElementById('submit'),
  loader: document.getElementById('loader'),
  thankYou: document.getElementById('thankYou'),

  initialize: () => {
    app.submitButton.addEventListener('click', () => {
      app.checkInputs();
    });
  },

  checkInputs: () => {
    const fName = document.getElementById('fname');
    const lName = document.getElementById('lname');
    const email = document.getElementById('email');
    const checkbox = document.getElementById('checkbox');
    let hasError = false;
    debugger;
    if (fName.value === '') {
      app.fName.classList.add('error');
      hasError = true;
    }
    if (lName.value === '') {
      lName.classList.add('error');
      hasError = true;
    }

    if (email.value === '' || !app.emailIsValid(email.value)) {
      email.classList.add('error');
      hasError = true;
    }
    if (checkbox.checked !== true) {
      checkbox.classList.add('checkBoxError');
      hasError = true;
    }

    if (!hasError) {
      app.handleSuccess();
    }

    
    // const textInputs = Array.from(document.getElementsByClassName('input'));
    // textInputs.forEach(input => {
    //   if (
    //       input.value === '' ||
    //       (input.type === 'checkbox' && !input.checked) ||
    //       (input.type === 'email' && !app.emailIsValid(input.value))
    //     ) {

    //     // conditional opertor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    //     input.type === 'checkbox' ? input.classList.add('checkBoxError') : input.classList.add('error')
    //     input.classList.add('error');
    //     hasError = true;
    //   } else if (input.classList.contains('error')) {
    //     input.classList.remove('error');
    //     input.classList.remove('checkBoxError');
    //   }
    // });
    // if (!hasError) app.handleSuccess();
    
  },

  handleSuccess: () => {
    app.submitButton.classList.add('hidden');
    app.loader.classList.remove('hidden');
    setTimeout(() => {
      app.loader.classList.add('hidden');
      app.thankYou.classList.remove('hidden');
    }, 3000);
  },

  emailIsValid: email => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },

};
