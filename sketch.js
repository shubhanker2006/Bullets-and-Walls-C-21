var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  
  bullet= createSprite(200, 200, 50, 80);
  wall= createSprite(1000, 200, thickness,height/2);
  wall.shapeColor=(80,80,80);
  
  speed=random(223,321);
  weight=random(30,50);
  

}

 function draw() {
  background("black"); 

  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  bullet.veloctyX=0
  var damage = 0.5 * weight * speed * speed/2768
  if(damage>10){
    bullet.shapeColor=("white")
  }
  if(damage<10 && damage>10){
    bullet.shapeColor=("white")
  }
  if(damage<10){
    bullat.shapeColor=("white")
  }
  if(hasCollided(bullet,wall))
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if (damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10)
  wall.shapeColor=color(0,255,0);
  }
  drawSprites();
}

function hasCollided (lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
