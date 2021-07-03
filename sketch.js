var garden,rabbit,apple,orangel,red;
var gardenImg,rabbitImg,appleImg,orangelImg,redImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png")
  orangelImg=loadImage("orangeLeaf.png")
  redImg=loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX;
  if(frameCount%80==0)
  {
    createApples()
  }
  if(frameCount % 100==0)
  {
    createOrangel()
  }
  if(frameCount % 200==0)
  {
     createRed()
  }
 
  drawSprites();
}
function createApples()
{
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg)
  apple.scale=0.07;
  apple.velocityY=3;
  
}

function createOrangel()
{
  orangel=createSprite(random(50,350),40,10,10);
  orangel.addImage(orangelImg);
  orangel.scale=0.07;
  orangel.velocityY=3;
 
  
}
function createRed()
{
  red=createSprite(random(50,350),40,10,10);
  red.addImage(redImg);
  red.scale=0.07;
  red.velocityY=3;
}



