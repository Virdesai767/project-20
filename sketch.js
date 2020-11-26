var car, wall;
var speed, weight;
function setup() {
  speed = random(50, 75);
  weight = random(1000, 275);
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 400, 60, 800)
  car.velocityX = speed;
  car.shapeColor = "black"
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(wall.x-car.x < (car.width+wall.wdith)/2){
    car.velocityX=0;
    var deformation=0.5 *weight *speed *speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }
    if(deformation>180 && deformation>100) {
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car.shapeColor(0,255,0);
    }
  }
  
}