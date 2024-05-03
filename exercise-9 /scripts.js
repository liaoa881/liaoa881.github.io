function setup() {
  createCanvas(displayWidth, displayHeight);
  noStroke()
}

function draw() {
  background(255, 204, 100);

  fill(255);
  circle(600, 700, 500);

  circle(600, 200, 300);

  fill(0);
  circle(530, 150, 50);

  fill(0);
  circle(660, 150, 50);

  fill('orange');
  triangle(580, 200, 620, 200, 600, 250);

  fill('brown');
  rect(350, 350, 200, 20);

  fill('brown');
  rect(650, 350, 200, 20);

  fill(255);
  circle(600, 450, 350);
 
}