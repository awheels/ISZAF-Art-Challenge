var colors;

function setup(){
  createCanvas(500,500);
  noLoop();
  strokeWeight(0.5);
  colors = [color(239, 118, 122,100), color(69, 105, 144,100), color(73, 190, 170,100), color(73, 220, 177,100), color(238, 184, 104,100)]
}

function draw(){
  trianglePattern(2,2);
  trianglePattern(5,1);
  trianglePattern(10,2);
}

function coordinateMaker(squareSize){
  return [random(x*squareSize/2,x*squareSize/2+squareSize),random(y*squareSize,y*squareSize+squareSize)];
}

function trianglePattern(dimension, density){
  squareSize = width/dimension;
  for(x=0; x<2*dimension-1; x+=1){
    for(y=0; y<2*dimension; y+=1){
      for(p=0; p<density; p++){
        fill(colors[int(random(0,5))]);
        var coordinate1 = coordinateMaker(squareSize);
        var coordinate2 = coordinateMaker(squareSize);
        var coordinate3 = coordinateMaker(squareSize);
        triangle(coordinate1[0],coordinate1[1],coordinate2[0],coordinate2[1],coordinate3[0],coordinate3[1]); 
      }
    }
  }
}

function keyPressed() {
  background(255);
  //saveCanvas('my_image', 'jpg');
}

function mousePressed() {
  redraw();
}