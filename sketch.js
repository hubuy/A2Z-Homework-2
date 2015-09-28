// A modification of Daniel Shiffman's code located at
// https://github.com/shiffman/A2Z-F15
// Adapted from: http://p5js.org/examples/examples/Dom_Input_and_Button.php

var inputA, inputB, inputC, button, placeName, foodName, personName;

function setup() {

  noCanvas();

  placeName = select('#placeName');
  foodName = select('#foodName');
  personName = select ('#personName');
  inputA = select('#textinputA');
  inputB = select('#textinputB');
  inputC = select('#textinputC');
  
  button = select('#generate');
  button.mousePressed(generateItinerary);
  inputA.elt.addEventListener('input', placeTyping);
  inputB.elt.addEventListener('input', foodTyping);
  inputC.elt.addEventListener('input', nameTyping);

}

function placeTyping() {
  placeName.html(inputA.value());
}

function foodTyping() {
  foodName.html(inputB.value());
}

function nameTyping() {
  personName.html(inputC.value());
}

function generateItinerary() {
  var place = inputA.value();
  var food = inputB.value();
  var name = inputC.value();
  var par = createP('I want to go to ' + place + ' to eat a lot of ' + food + ' with my best friend, ' + name + '!');
}
