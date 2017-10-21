var x, y, z;
var colours;
var t=0;

function setup() {
  createCanvas(800, 800, WEBGL)
  background(50);
  
  miniSpheres = Array();
  centralSpheres = Array();
  
  createEgg(miniSpheres, centralSpheres, PI/16, PI/8, 130, 60);

  miniSpheres2 = Array();
  centralSpheres2 = Array();
  
  createEgg(miniSpheres2, centralSpheres2, PI/22, PI/6, 120, 50);

  miniSpheres3 = Array();
  centralSpheres3 = Array();
  
  createEgg(miniSpheres3, centralSpheres3, PI/18, PI/5, 110, 40);

  miniSpheres4 = Array();
  centralSpheres4 = Array();
  
  createEgg(miniSpheres4, centralSpheres4, PI/22, PI/4, 125, 55);

}

function createEgg(array1, array2, density1, density2, radius1, radius2){  
  generateSpheres(array1, density1, radius1, 1, 8);
  generateSpheres(array2, density2, radius2, 0, 12);
}

function draw() {
  background(50);
 
  animate(-180,180,miniSpheres,centralSpheres,false,true,false);  
  animate(180,180,miniSpheres2,centralSpheres2,false,false,true);
  animate(180,-180,miniSpheres3,centralSpheres3,false,false,true);  
  animate(-180,-180,miniSpheres4,centralSpheres4,true,false,false);
}

function animate(x, y, array1, array2, x_dir, y_dir, z_dir){
  
  push();
  translate(x, y);
  if (x_dir){
    rotateX(t);
  }
  rotateX(HALF_PI);
  if (y_dir){
    rotateY(t);
  }
  if (z_dir){
    rotateZ(t);
  }
  t+=0.005;
  
  var index;
  for (index = 0; index < array1.length; ++index) {
    array1[index].display();
  }

  var index;
  for (index = 0; index < array2.length; ++index) {
    array2[index].display();
  }  
  pop();
}

function generateSpheres(arrayName, density, radius, colour, rSphere){
  originalRadius = radius
  colours = [color(252,252,28), color(255)];

  count = 0;
  for (u=0; u<TWO_PI; u+=density) {    
    for (v=0.1; v<PI; v+=density) {
      rand_gen = random(0,10);
      if (rand_gen > 6){
        radius = radius+random(-30,30);
        x=radius * cos(u) * sin(v);
        y=radius * sin(u) * sin(v);
        z=radius * cos(v);
        small = new MiniSphere(u,v,x,y,z,colours[colour], rSphere, random(0,10));
        console.log(small);
        arrayName.push(small);
        radius = originalRadius;
      }
    }
    count +=1;
  } 
}

function MiniSphere(u,v,x,y,z,colour,rSphere, randNum) {
  this.u = u,
  this.v = v;
  this.x = x,
  this.y = y;
  this.z = z;
  this.colour = colour;
  this.rSphere = rSphere;
  this.randNum = randNum;
  
  this.display = function() {
    strokeWeight(1.5);
    stroke(255);

    push();
    translate(this.x*1.1,this.y*1.1,this.z*1.1);
    stroke(0);
    fill(255);
      
    var r_2=rSphere;
    if (this.v == 0){
      r_2 = 1;
    } else {
      r_2 = r_2 * sin(this.v);
    }

    fill(this.colour);
    sphere(r_2);
    pop();
  }
}