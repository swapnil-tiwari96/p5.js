let randCircles = [];
let randRects = [];
let randTriangles = [];

class randCircle {
  constructor(_x, _y, _radius, _r, _g, _b, _alpha) {
    this.x = _x;
    this.y = _y;
    this.radius = _radius;
    this.r = _r;
    this.g = _g;
    this.b = _b;
    this.alpha = _alpha;
  }

  createCircle() {
    stroke(255);
    fill(this.r, this.g, this.b, this.alpha);
    circle(this.x, this.y, this.radius);
  }
}

class randRect {
  constructor(_x, _y, _w, _h, _r, _g, _b, _alpha, _rot) {
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;
    this.r = _r;
    this.g = _g;
    this.b = _b;
    this.alpha = _alpha;
    this.rot = _rot;
  }

  createRect() {
    stroke(255);
    fill(this.r, this.g, this.b, this.alpha);
    rect(0, 0, this.w, this.h);
  }

  rotateRect() {
    translate(this.x, this.y);
    rotate(this.rot);
  }
}

class randTriangle {
  constructor(_x1, _y1, _x2, _y2, _x3, _y3) {
    this.x1 = _x1;
    this.x2 = _x2;
    this.x3 = _x3;
    this.y1 = _y1;
    this.y2 = _y2;
    this.y3 = _y3;
  }

  createTriangle() {
    stroke(255);
    fill(this.r, this.g, this.b, this.alpha);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }
}

function setup() {
  createCanvas(9075, 6201);
  angleMode(DEGREES);
  for (let i = 0; i <= 10; i++) {
    randCircles[i] = new randCircle(
      random(0, width),
      random(0, height),
      random(50, 100),
      random(0, 255),
      random(0, 255),
      random(0, 255),
      random(20, 50)
    );
  }
}
