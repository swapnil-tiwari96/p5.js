//Swapnil Tiwari
//Bezier

function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  strokeWeight(25);
  fill(254, 227, 236);
  bezier(
    width / 6,
    height / 2,
    width / 3,
    -1000,
    width * (2 / 3),
    7000,
    width * (5 / 6),
    height / 2
  );

  fill(249, 197, 213);
  bezier(
    width / 6,
    height / 2,
    width / 3,
    100,
    width * (2 / 3),
    6000,
    width * (5 / 6),
    height / 2
  );

  fill(249, 153, 183);
  bezier(
    width / 6,
    height / 2,
    width / 3,
    1000,
    width * (2 / 3),
    5000,
    width * (5 / 6),
    height / 2
  );

  fill(242, 120, 159);
  bezier(
    width / 6,
    height / 2,
    width / 3,
    2000,
    width * (2 / 3),
    4000,
    width * (5 / 6),
    height / 2
  );
  line(width / 6, height / 2, width * (5 / 6), height / 2);
}
