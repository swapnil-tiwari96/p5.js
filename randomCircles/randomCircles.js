//Swapnil Tiwari
//Starting session with p5.js

let bubbles = [];

class Bubble {
  constructor(_x, _y, _r) {
    this.x = _x;
    this.y = _y;
    this.r = _r;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(random(255), random(255), random(255));
    fill(random(255), random(255), random(255));
    circle(this.x, this.y, this.r);
  }
}

function setup() {
  createCanvas(400, 400);
  //let n = random(4,10)
  for (let i = 0; i <= 100; i++) {
    bubbles[i] = new Bubble(random(width), random(height), random(10, 40));
  }
}

function draw() {
  background(random(255), random(255), random(255));
  for (let i = 0; i <= 100; i++) {
    bubbles[i].show();
    bubbles[i].move();
  }
}
