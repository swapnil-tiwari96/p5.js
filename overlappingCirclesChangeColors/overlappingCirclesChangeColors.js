//Swapnil Tiwari
//Whenever any circle overlaps any other the circle flickers with different colors

let bubbles = [];

class Bubble {
  constructor(_x, _y, _d) {
    this.x = _x;
    this.y = _y;
    this.d = _d;
    this.r = 0;
    this.g = 0;
    this.b = 0;
  }

  intersects(other) {
    return dist(this.x, this.y, other.x, other.y) < (this.d + other.d) / 2;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.d);
  }

  changeColor(newColorR, newColorG, newColorB) {
    this.r = newColorR;
    this.g = newColorG;
    this.b = newColorB;
  }
}

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i <= 10; i++) {
    bubbles[i] = new Bubble(random(width), random(height), random(10, 40));
  }
}

function draw() {
  background(0);
  for (let bubble of bubbles) {
    bubble.show();
    bubble.move();
    let overlapping = false;
    for (let other of bubbles) {
      if (bubble != other && other.intersects(bubble)) {
        overlapping = true;
      }
      if (overlapping) {
        bubble.changeColor(random(255), random(255), random(255));
      } else {
        bubble.changeColor(0, 0, 0);
      }
    }
  }
}
