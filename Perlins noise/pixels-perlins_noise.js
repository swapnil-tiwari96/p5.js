//Swapnil Tiwari
//Perlins noise

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(10);
  frameRate(120);
}

function draw() {
  let yoff = 0;
  loadPixels();
  //outer loop for horizontal
  for (let x = 0; x < width; x++) {
    let xoff = 0;
    // inner loop for vertical
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * 4;
      let r = noise(xoff, yoff) * 255; //  noise function
      pixels[index] = r; //r
      pixels[index + 1] = r; //g
      pixels[index + 2] = r; //b
      pixels[index + 3] = 100; //alpha
      xoff += 0.01;
    }
    yoff += 0.01;
  }
  updatePixels();
}
