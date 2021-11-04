
const heading = document.getElementById("title");

const name = "Calli's";

heading.innerText =`Enter ${name} Information`;

document.getElementById("main").innerHTML = "<h3> Hello World Smaller</h3>";

const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs[0].innerText);

const paaragraphArray = Array.from(paragraphs)

const inputs =  document.getElementsByClassName("inputItem");
inputs[1].classList.add('pink');

const newElement = document.createElement('div')
newElement.innerHTML = `I'm an element created on the fly`;
newElement.style.fontSize = '24px';
document.querySelector('p').append(newElement);

//adding an event listener
//addEventListner requires two parameters: the type of event, the event that is occuring (callback)
//a callback is a function in a function
heading.addEventListener("click", () => {
  alert("you clicked me!");
});

function myFunction() {
  //if input is equal to the actual letter, alert them they got it right
  const letter = document.getElementById("myInput").value;
  if (letter === "c") {
    alert("You guessed correctly!");
  } else {
    alert("You guessed the wrong letter!");
  }
}

document.getElementById('submitLetter').addEventListener('click', e => {
  myFunction();
})

document.getElementById('googleLink').addEventListener('click', e => {
  debugger;
  e.preventDefault();
  console.log('you clicked the google link')
})

// //include a few text boxes in HTML to grab a person's name, an adjective, and a noun
// //write a JS function that will concatenate all of the user input into a MAD LIB. Make it funny.
// // deliver the completed MAD LIB back to the user in a div
function madLib() {
  const name = document.getElementById("myInputName").value;
  const adjective = document.getElementById("myInputAdjective").value;
  const noun = document.getElementById("myInputNoun").value;
  document.getElementById("result").innerHTML = `Once upon a time, ${name} flew ${adjective} on a ${noun}`;
}

document.getElementById('runMadlib').addEventListener('click', e => {
  madLib();
})

console.log('its working');

