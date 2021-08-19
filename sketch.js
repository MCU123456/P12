var path,leftBoundary,rightBoundary;
var pathImage;
var runner;
var runnerImage;

function preload(){
  //pre-load images
pathImage = loadImage("path.png");

  runnerImage =
  loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas=(400,400);

  // moving background
  path=createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY=4;
  path.scale=1.2;

    //creating runner running
    runner = createSprite(180,340,30,30);
    runner.addAnimation("runnerRunning",runnerImage);
    runner.scale=0.08;

    // create left Boundary
    leftBoundary=createSprite(0,0,100,800);
    leftBoundary.visible = false;

    // create right Boundary
    rightBoundary=createSprite(410,0,100,800);
    rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;

  // runner moving on Xaxis with mouse
  runner.x = World.mouseX;

  edges = createEdgeSprites();
  runner.collide(edges[3]);
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);

  // code to reset the background
  if(path.y > 400){
    path.y = height/2;

  }
    drawSprites();
}
