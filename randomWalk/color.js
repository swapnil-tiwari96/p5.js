//Swapnil Tiwari
//This is to generate the random walk with variating colors.

let x, y, r, g, b;
function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
  background(0); // so that it leaves a trail of itself.
  frameRate(500); //program seems to run a bit faster
  r = random(255);
  g = random(255);
  b = random(255);
}

//the technique is used to fasten the process of printing of the canvas. draw with step function.
function draw() {
  for (let i = 0; i < 1000; i++) {
    step();
  }
}

function step() {
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

  //restrain randomness between 0-255
  r = constrain(r, 0, 255);
  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);

  //to change color
  r += random(-10, 10);
  g += random(-5, 5);
  b += random(-5, 5);

  stroke(r, g, b);
  point(x, y);
}
