//Swapnil Tiwari
//This is to generate the simplest random walk

let x, y;
function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
  background(255); // so that it leaves a trail of itself.
  frameRate(600); //program seems to run a bit faster
}

function draw() {
  stroke(0);
  strokeWeight(5);
  x = constrain(x, 0, width); //so that the point doesnt go off the canvas
  y = constrain(y, 0, height); // so that the point doesnt go off the canvas
  //randomly moves on x and y coordinate.
  x += random(-1, 1);
  y += random(-1, 1);
  point(x, y);
  console.log(num);
}
