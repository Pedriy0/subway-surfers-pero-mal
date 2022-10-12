var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i,movementX;

function preload(){
  //loadImage de path (camino)
  //loadAnimation de boy (niño)
 pathImg = loadAnimation("path.png");
 boyImg = loadAnimation("j1.png","j2.png","j3.png","j4.png","j5.png","j6.png","j7.png");
}

function setup(){
  
  createCanvas(400,400);
path = createSprite(200,200)
path.addAnimation("path", pathImg );
path.velocityY= 4;
path.scale=1.2;

boy = createSprite (200,350)
boy.addAnimation("boy", boyImg)
boy.scale=0.08;
  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false 

rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false
}

function draw() {

  boy.x = World.mouseX;

  background(0);
  path.velocityY = 4;
  
  boy.X = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(rightBoundary,leftBoundary)
  
  boy.X = movementX
  drawSprites();
  if(path.y > 400 ){
    path.y = height/2;
  }
}
  
 