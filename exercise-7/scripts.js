let mainSquare = document.getElementById("box");
let widthInput = document.getElementById("width-range");
let heightInput = document.getElementById("height-range");
let rotateInput = document.getElementById("rotate-range");

function changeCircle() {
  mainSquare.classList.toggle("circle");
}

function changeWidth() {
    mainSquare.style.width = widthInput.value + "px";
}

function changeHeight() {
    mainSquare.style.height = heightInput.value + "px";
}

function changeDeg() {
    mainSquare.style.transformOrigin = "center";
    mainSquare.style.transform = "translate(-50%, -50%) rotate(" + rotateInput.value + "deg)";
}
