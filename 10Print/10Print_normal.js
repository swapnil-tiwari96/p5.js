let sclx, scly;
let x = 0;
let y = 0;
function setup() {
  createCanvas(9075, 6201);
  sclx = width / 50;
  scly = height / 50;
  background(255);
}

function draw() {
  let rand = random(0, 1);
  strokeWeight(10);
  line(x, y, x + sclx, y + scly);
  if (rand < 0.5) {
    line(x, y, x + sclx, y + scly);
  } else {
    line(x, y + scly, x + sclx, y);
  }

  x += sclx;
  if (x > width) {
    x = 0;
    y += scly;
  }
}
