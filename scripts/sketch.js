let mic;
let micLevel;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  micLevel = mic.getLevel();
  background(5);
  stroke(255, round(micLevel * 800), round(micLevel * 255));
  strokeWeight(micLevel * 200);
  for (let i = 0; i < 6; i++) { // for loop counting from 0 to 6
    fill(random(250), random(100), random(255), 255); //1 circle is drawn with every loop, so 6 circles total
    ellipse(i * 60 + 40, micLevel * 5000 + random(50), 50); //micLevel for the y value caues the circles to go up and down with the volume, i*60 means a new circle is drawn every 60 pixels along the x axis
  }
}