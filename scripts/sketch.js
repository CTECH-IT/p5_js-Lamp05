let mic;

function setup() {
  createCanvas(600, 600);
  userStartAudio();
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  clear();
  background(37, 46, 61);
  micLevel = mic.getLevel();
  fill(255, 251, 201);
  ellipse(width/2, height/2, micLevel*600, micLevel*600);
  noStroke();
}