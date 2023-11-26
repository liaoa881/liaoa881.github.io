
//*Breathe In*
//*Okay, lets do this. TK.
//TkTk. Alright, first of all, the first button
// wait, i dont need this: let button = document.querySelector(".button");
//let wrapper = document.querySelector(".wrapper");
//oh this one I do:

alert("Welcome to my Self-Dialogue. Experience the Sound of Stress for the Upcoming three weeks :D")
let button = document.querySelector(".button");
let container = document.querySelector(".container");

button.addEventListener("click", function(event) {
    console.log(event, event.target);
    let newItem = document.createElement("div");
    newItem.classList.add("new-content");
    newItem.innerHTML = "Tk.";
    container.appendChild(newItem);
});

//TkTk.
//TkTk.//TkTk.
//TkTk.
//TkTk.
//TkTk.    Seven deletes later.....
//UGHHHHHHH
//TkTk.

let colors = ["f3e9dc", "#C08552", "#DAB49D", "#0F0A0A",];
let body = document.querySelector("body");

function newColor() {
  let randIndex = Math.floor(Math.random() * colors.length);
  let randColor = colors[randIndex];
  body.style.backgroundColor = randColor;
}
/* Alight, its finally working!  */

/* Tktktktktktktktktk.
                    Tktktktktk.
                      Tktktktktk.
         Tktktktktk.
    Tktktktktk.
                UGhhhhh.... soooo much.
                            Tktktktktk.   
                            
                            
                              Tktktktktk.*/
button.addEventListener("click", newColor);



let buttontwo = document.querySelector(".buttontwo");
let containertwo = document.querySelector(".containertwo");
/* GPT help fix some minor click issues */
var click = 0;

buttontwo.addEventListener("click", function(event) {
    click += 1;
    console.log(event, event.target);
    let newItem = document.createElement("div");
    newItem.classList.add("new-content");
    newItem.innerHTML = "Ugh....";
    containertwo.appendChild(newItem);
    if (click > 10){
        alert("Man, you had a rough day huh. Me too");
      }
});
l
