//Swapnil Tiwari
//Create simple Vectors
let r, g, b;
function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  r = random(255);
  g = random(255);
  b = random(255);
  translate(width / 2, height / 2); //so that the starting point is in mid
  v = p5.Vector.random2D(); //random2D makes random direction vectors with same magnitude
  v.mult(random(50, 100)); //v vector is scalar multiplied by the values in bracket
  stroke(r, g, b);
  line(0, 0, v.x, v.y);
}
