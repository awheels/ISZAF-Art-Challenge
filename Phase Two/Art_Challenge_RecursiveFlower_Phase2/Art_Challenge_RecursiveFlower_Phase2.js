var mdpt1, mdpt2, mdpt3, mdpt4;
var rt = 0.4;
var colourList;

function setup() {
  createCanvas(500,500);
  background(0);
  noLoop();
  colourList = [color(255,51,51),color(255,102,102),color(255,153,153),color(255,204,204)];
}

function draw() {
  shape(width/1.35,rt);
}

function shape(squareLength,rt){
  fill(colourList[int(random(0,4))]);
  push();
  translate(width/2, height/2);
  rotate(rt);
  rect(-squareLength/2,-squareLength/2,squareLength,squareLength)
  pop();
  squareLength = squareLength*0.9;
  rt = rt + 0.3
  if (squareLength > 20){
    shape(squareLength,rt);
  }
}

function keyPressed() {
  saveCanvas('my_image', 'jpg');
}

function mousePressed() {
  redraw();
}