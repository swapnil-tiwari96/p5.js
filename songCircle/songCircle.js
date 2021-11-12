//Swapnil Tiwari
//Simple visualization of circle with music
let song;
let amp;
let historyVol = [];

function preload() {
  song = loadSound("Jamie xx- All Under One Roof Raving.mp3"); //load sound
}
function setup() {
  createCanvas(400, 400);
  amp = new p5.Amplitude();
  song.play();
}

function draw() {
  background(0);
  let vol = amp.getLevel(); //returns amplitude level at a given time
  let bigVol = map(vol, 0, 1, 10, 400);

  noStroke();
  fill(209, 232, 228);
  circle(width / 2, height / 2, bigVol);
}
