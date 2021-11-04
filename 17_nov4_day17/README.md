* Structuring your code
  ``` 
  var app = {
    variableName: value,

    functionName: () => {
      this.variableName;
      this.anotherFunctionName(parameterValue)
    },

    anotherFunctionName: param => {
      console.log(param);
    }
  }
  ```
* Branches in Github Desktop


** I'm in a branch!!! **

## In class exercise

* Create an HTML page that has inputs for a first name, last name, email address, and a checkbox, as well as a submit button. 
* Write the javascript that does the following (the app should be written as an object, like the example above):
  * When a user clicks the button, it checks to see that value is not empty (including the checkbox)
    * Hint: `value !== ''` and `checked === true`
  * If the input is empty, it adds a red border to the missing input
  * The script should check to see if the email address entered is valid
    * Hint: 
    ```
      function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    ```
  * If all values are entered correctly, the submit button should dissappear and a spinner should take its place
    * Hint: [CSS Loader](https://www.w3schools.com/howto/howto_css_loader.asp)
  * After 3 seconds have passed, the spinner should be replaced with text that says "Thanks for signing up!"
    * Hint: [Set timeout](https://www.w3schools.com/jsref/met_win_settimeout.asp)
  * When you're finished, upload to Brightspace

## Homework

* [Read about fat arrow functions](https://www.freecodecamp.org/news/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881/)
* [Read about Forms](https://github.com/thejsway/thejsway/blob/master/manuscript/chapter17.md)
* When was the last time you did a Learning Log? Pick a Javascript one!
* Use Github Desktop to create a new branch in your midterm project. Add at least 3 listeners and 2 functions to create an effect on your page. Link to the branch's Github Repo.





