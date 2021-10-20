//Swapnil Tiwari
//Starting session with p5.js

let r,
  g,
  b,
  x = 0,
  y = 0;
let speedX = 10;
let speedY = 5;
function setup() {
  createCanvas(500, 400);
  r = random(255);
  g = random(255);
  b = random(255);
  background(r, g, b);
}

// This function is used for fill and positioning of the ball.
function display() {
  r = random(255);
  g = random(255);
  b = random(255);
  fill(r, g, b, random(40, 100));
}

//this function is used to move the ball
function move() {
  x += speedX;
  y += speedY;
}

function bounce() {
  if (x > width || x < 0) {
    speedX *= -1;
  }
  if (y > height || y < 0) {
    speedY *= -1;
  }
}

function draw() {
  display();
  circle(x, y, 50);
  move();
  bounce();
}
