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
  let num = floor(random(0, 4)); //create random value from 0-3
  //according to the number it decides where to move
  switch (num) {
    case 0:
      x += 1;
      break;

    case 1:
      y += 1;
      break;

    case 2:
      x -= 1;
      break;

    case 3:
      y -= 1;
      break;
  }
  point(x, y);
  console.log(num);
}
