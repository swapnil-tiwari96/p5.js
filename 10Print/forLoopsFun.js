let scl = 100;
let rows, cols;

function preload() {
  song = loadSound("FLP(VDO) AUDIO 41(weak sick).wav");
}
function keyPressed() {
  song.play();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  amp = new p5.Amplitude();
  rows = floor(width / scl) + 1;
  cols = floor(height / scl);
}

function draw() {
  background(0);
  let lev = map(amp.getLevel(), 0, 1, 20, 100);
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      let index = (x + y * width) * 4;
      push();
      translate(x * scl, y * scl);
      if ((x > -1 && x < 3) || (y > -1 && y < 3)) {
        strokeWeight(5);
        stroke(255);
        fill(255, 0, 0);
        rect(0, 0, lev, scl);
      } else if ((x > 2 && x < 5) || (y > 2 && y < 5)) {
        fill(0, 255, 0);
        circle(0, 0, lev);
      } else {
        strokeWeight(lev);
        stroke(0, 0, 255);
        line(0, 0, scl, scl);
      }
      pop();
      console.log(lev);
    }
  }
}
