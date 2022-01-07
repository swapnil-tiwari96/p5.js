//Swapnil Tiwari
//10Print

let sclx, scly;
let x = 0;
let y = 0;

function preload() {
  song = loadSound("Ry Legit - Buzz Lightyear (HD).mp3");
}
function keyPressed() {
  song.play();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  amp = new p5.Amplitude();
  sclx = width / 35;
  scly = height / 35;
}

function draw() {
  let lev = map(amp.getLevel(), 0, 1, 1, 300);
  stroke(0);
  strokeWeight(0.1 + lev / 50);
  // dsadsadsa
  line(x, y, x + sclx, y + scly);
  if (lev > 1 && lev < 30) {
    line(x, y, x + sclx, y + scly);
  }
  //afafas
  else if (lev > 30 && lev < 60) {
    line(x, y + scly, x + sclx, y);
  }
  //vsafsafsafa
  else if (lev > 60 && lev < 300) {
    line(x, y + scly, x + sclx, y);
    line(x, y, x + sclx, y + scly);
  }
  console.log(lev);
  x += sclx;
  if (x > width) {
    x = 0;
    y += scly;
  }
}
