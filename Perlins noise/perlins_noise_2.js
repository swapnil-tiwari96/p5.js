//Swapnil Tiwari
//Perlins noise-grid

let inc = 0.1;
let scl = 10;
let cols, rows;
let zoff = 0; // 3rd dimension which is time here

function setup() {
  createCanvas(windowWidth, windowHeight);

  // to create a grid
  rows = height / scl;
  cols = width / scl;
}

function draw() {
  background(255);
  let yoff = 0;
  //outer loop for horizontal
  for (let x = 0; x < rows; x++) {
    let xoff = 0;
    // inner loop for vertical
    for (let y = 0; y < cols; y++) {
      let index = (x + y * width) * cols;
      let r = noise(xoff, yoff, zoff) * TWO_PI; //noise function
      let v = p5.Vector.fromAngle(r); //to make vectors according to the angle of the noise function
      xoff += inc;
      //create custom structure for the line-vector
      push();
      stroke(0);
      translate(x * scl, y * scl);
      rotate(v.heading());
      line(0, 0, scl, 0);
      pop();
    }
    yoff += inc;
    zoff += 0.001;
  }
  console.log(floor(frameRate()));
}
