let mic;

 function setup(){
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
}

function draw(){
  micLevel = mic.getLevel();
  let y = height - micLevel * height;
  ellipse(width/2, y, 10, 10);
}