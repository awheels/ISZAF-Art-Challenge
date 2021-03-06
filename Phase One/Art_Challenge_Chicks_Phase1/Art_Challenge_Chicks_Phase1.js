var dimensions = 5;

function setup() {
  createCanvas(800,600);
  background(255);
  noLoop();
}

function draw() {
  stroke(0);
  strokeWeight(5);
  rect(5, 5, width-10, height-10);

  //var spacing = width/dimensions;
  for (x=0; x<4; x+=1){
      for (y=0; y<3; y++){
          chickenDrawer(200*x+100, 200*y+100-10, random(50,70));
      }
  }
}

function chickenDrawer(x,y,cWidth){
    strokeWeight(2);
    stroke(0);
    legLength = width/(2*dimensions);
    line(x-10, y, x-15, y+legLength);
    line(x+10, y, x+15, y+legLength);
    line(x+15, y+legLength, x+30, y+legLength+10);
    line(x-15, y+legLength, x-30, y+legLength+10);
    line(x+15, y+legLength, x+35, y+legLength+5);
    line(x-15, y+legLength, x-35, y+legLength+5);
    line(x+15, y+legLength, x+40, y+legLength);
    line(x-15, y+legLength, x-40, y+legLength);
    strokeWeight(1);
    r = random(100,200);
    g = random(100,150);
    b = random(50, 100);
    fill(r,g,b);
    noStroke();
    ellipse(x, y, 60, 60);
    stroke(r, g, b);
    for (angle = 0; angle <= 90; angle++){
        length = random(cWidth-10,cWidth+10);
        y_c = length*sin(angle * PI/180);
        x_c = length*cos(angle * PI/180);
        line(x, y, x+x_c, y-y_c);
    }
    for (angle = 0; angle <= 90; angle++){
        length = random(cWidth-10,cWidth+10);
        y_c = length*sin(angle * PI/180);
        x_c = length*cos(angle * PI/180);
        line(x, y, x+x_c, y+y_c);
    }
    for (angle = 0; angle <= 90; angle++){
        length = random(cWidth-10,cWidth+10);
        y_c = length*sin(angle * PI/180);
        x_c = length*cos(angle * PI/180);
        line(x, y, x-x_c, y-y_c);
    }
    for (angle = 0; angle <= 90; angle++){
        length = random(cWidth-10,cWidth+10);
        y_c = length*sin(angle * PI/180);
        x_c = length*cos(angle * PI/180);
        line(x, y, x-x_c, y+y_c);
    }
    fill(240);
    stroke(0);
    ellipse(x-15, y-20, 15, 15);
    ellipse(x+15, y-20, 15, 15);
    fill(0);
    r_x = random(12,18);
    r_y = random(18,22);
    ellipse(x-r_x, y-r_y, 5, 5);
    ellipse(x-r_x+30, y-r_y, 5, 5);
    noFill();
    noStroke();
    fill(252, 194,99);
    mouth = int(random(0,4));
    if (mouth == 0){
        triangle(x, y-5, x, y+10, x+30, y+2.5);
    } else if (mouth == 1){
        triangle(x, y-5, x, y+10, x-30, y+2.5);
    } else if (mouth == 2){
        triangle(x, y-5, x, y+7, x+30, y-2.5); 
        triangle(x, y, x, y+7, x+30, y+10);
    }else{
        triangle(x, y-5, x, y+7, x-30, y-2.5); 
        triangle(x, y, x, y+7, x-30, y+10); 
    }
    noFill();
}

//function mouseClicked() {
//  saveCanvas('my_image', 'jpg');
//}

function mousePressed() {
  background(255);
  redraw();
}