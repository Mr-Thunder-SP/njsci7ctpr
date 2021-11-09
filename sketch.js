var blastImg,playerCar,bugatti,ai1,ai2,track,nitro,henry,ai11,ai12,bossAi,nos,gameState,bo1,bo2,bi1,bi2;

function preload(){
  gameState=0
  blastImg=loadImage("blast.png");
  playerCar=loadImage("lambo.png");
  bugatti=loadImage("bugattiAi.png");
  ai1=loadImage("car1.png");
  ai2=loadImage("car2.png");
  track=loadImage("raceStrip.png");
  nitro=loadImage("nitroBottle.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  henry=createSprite(400, 130, 50, 50);
  henry.addImage(playerCar)
  henry.scale=0.09
  henry.rotation=90

  bo1=createSprite(670,80,  800, 50);
  bo2=createSprite(670,550,  800, 50);

  bi1=createSprite(670,260,  800, 50);
  bi2=createSprite(670,380,  800, 50);


  ai11=createSprite(490, 130, 50, 50);
  ai11.addImage(ai1)
  ai11.scale=0.04
  ai11.rotation=90

  ai12=createSprite(490, 200, 50, 50);
  ai12.addImage(ai2)
  ai12.scale=0.04
  ai12.rotation=90

  bossAi=createSprite(400, 200, 50, 50);
  bossAi.addImage(bugatti)
  bossAi.scale=0.15
  bossAi.rotation=90

  playButton=createImg("playButton.gif")
  playButton.position(400,200)
  playButton.size(400,200)
  playButton.mouseClicked(changeState)
  imageMode(CENTER)

  nos=createSprite();
}

function draw() {
  background(255,255,255); 
  
  

  if(gameState==0){
   henry.visible=false
   bossAi.visible=false
   ai11.visible=false
   ai12.visible=false
   nos.visible=false
   bi1.visible=false
   bo1.visible=false
   bi2.visible=false
   bo2.visible=false
  }else{
    playButton.hide()
    playerControls()
    henry.visible=true
    bossAi.visible=true
    ai11.visible=true
   ai12.visible=true
   bi1.visible=true
   bo1.visible=true
   bi2.visible=true
   bo2.visible=true
    image(track,width/2,height/2,width,height)
    stroke(10);
          fill("red");
          ellipse(henry.x, henry.y, 60, 60); 

   
  }
 henry.collide(bi1)
 henry.collide(bi2)
 henry.collide(bo1)
 henry.collide(bo2)

 ai11.collide(bi1)
 ai11.collide(bi2)
 ai11.collide(bo1)
 ai11.collide(bo2)

 ai12.collide(bi1)
 ai12.collide(bi2)
 ai12.collide(bo1)
 ai12.collide(bo2)

 bossAi.collide(bi1)
 bossAi.collide(bi2)
 bossAi.collide(bo1)
 bossAi.collide(bo2)
  
  console.log(henry.y)
  drawSprites();
}
function changeState(){
  gameState=1
  ai1.velocityX=1
  ai2.velocityX=1
  bossAi.velocityX=8
}
function playerControls(){
  if(keyDown(RIGHT_ARROW)){
    henry.x+=10
  }
  if(keyDown(LEFT_ARROW)){
    henry.x-=10
  }
  if(keyDown(UP_ARROW)){
    henry.y-=10
  }
  if(keyDown(DOWN_ARROW)){
    henry.y+=10
  }
}