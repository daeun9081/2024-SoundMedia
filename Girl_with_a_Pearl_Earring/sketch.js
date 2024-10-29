function setup() {
  createCanvas(1280, 720);
  jj = loadImage("jj.png");

}

function draw() {
  image(jj, 0, 0, 1280, 720);
  console.log(mouseX, mouseY);
  fill(220);
  noStroke();
  triangle(572, 344, 617, 334, 567, 314);
  fill(0);
  triangle(567, 314, 617, 334, 609, 274);
}
