function setup() {
  createCanvas(500,500); 
}

function draw() {
  noStroke();
  var val = 2*sqrt((width/2)**2+(height/2)**2)/30;
  var val2 = width/val
  for(x=0; x<2*sqrt((width/2)**2+(height/2)**2); x += 30){
    fill(mouseX/2,x/3+val2,x/3+val2)
    ellipse(width/2, height/2, 2*sqrt((width/2)**2+(height/2)**2)-x, 2*sqrt((width/2)**2+(height/2)**2)-x);
  }
}