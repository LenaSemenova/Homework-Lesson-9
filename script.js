function randomColor() {
  return Math.floor(Math.random() * 255);
}
function squareOne() {
  const red = randomColor();
  const green = randomColor();
  const blue = randomColor();
  document.querySelector(".squareOne").style.background =
    "rgb(" + red + "," + green + "," + blue + ")";
}
function squareTwo() {
  const red = randomColor();
  const green = randomColor();
  const blue = randomColor();
  document.querySelector(".squareTwo").style.background =
    "rgb(" + red + "," + green + "," + blue + ")";
}
function squareThree() {
  const red = randomColor();
  const green = randomColor();
  const blue = randomColor();
  document.querySelector(".squareThree").style.background =
    "rgb(" + red + "," + green + "," + blue + ")";
}
function coloring() {
  squareOne();
  squareTwo();
  squareThree();
}

function init() {
  coloring();
  document.querySelector("button").addEventListener("click", coloring);
}

window.addEventListener("DOMContentLoaded", init);
