let body = document.body;

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
}

let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);

const parallax = document.querySelector('.parallax');
const front = document.querySelector('.front-layer');
const sFront = 300;

parallax.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;

    front.style.transform = `
        translate(
            ${x / sFront}%,
            ${y / sFront}%
        )`;

});