var colours;
var prevNumber = 0;

function setup() {
  createCanvas(800,600);
  background(255);
  noStroke()
  noLoop();
  colours = colourSelect(prevNumber);
}

function draw() {
  background(255);
  for (y=0; y <= width/100; y+=1){
      ynoise = random(10);
      colourSet(y, colours)
      beginShape();
      if (y % 2 == 0){
        vertex(width,100*y);
        vertex(0,100*y);
      }else{
        vertex(width,100*y+100);
        vertex(0,100*y+100);
      }
      for (x=0; x <= width/4; x++){
        extra_y = 10 + noise(ynoise) * 80
        vertex(4*x,100*y+extra_y);
        ynoise += 0.3;
      }
      if (y % 2 == 0){
        vertex(width,100*y);
        vertex(0,100*y);
      }else{
        vertex(width,100*y+100)
      }
      endShape() 
    }
}

function colourSelect(){
  colours1 = [color(38, 50, 56), color(55, 71, 79), color(69, 90, 100), color(84, 110, 122)];
  colours2 = [color(23,64,34), color(46,127,67), color(70,191,101), color(93,255,135)];
  colours3 = [color(127,114,14), color(191,172,21), color(229,206,25), color(225,229,28)];
  colours4 = [color(64,22,22), color(127,44,44), color(191,65,66), color(255,87,88)];
  coloursList = [colours1, colours2, colours3, colours4];
  
  colourNumber = prevNumber;
  
  while (colourNumber == prevNumber) {
    colourNumber = int(random(0,4));
  }
  
  colours = coloursList[colourNumber];
  
  prevNumber = colourNumber;
  
  return colours;
}

function colourSet(y, colours){

  if (y == 0){
    fill(colours[0]);
  } else if (y == 1 || y == 2){
    fill(colours[1]);
  } else if (y == 3 || y == 4){
    fill(colours[2]);
  } else if (y == 5){
    fill(colours[3]);
  }
}

//function mouseClicked() {
//  saveCanvas('my_image', 'jpg');
//}

function mousePressed() {
  colours = colourSelect();
  redraw();
}