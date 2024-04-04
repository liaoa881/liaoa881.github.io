let boxes = document.querySelectorAll(".box");
let palette = ["red", "blue", "transparent"];
let opacity = 1;


for (let box of boxes) {
  let randomColor = Math.floor(Math.random() * palette.length);
  box.style.opacity = opacity;
  box.style.transform = "rotate(" + Math.random() * 90 + "deg)";
  box.style.backgroundColor = palette[randomColor]
}


