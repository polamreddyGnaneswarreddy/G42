var issImage,bgImage,spacecraft1Image,
spacecraft2Image,spacecraft3Image,
spacecraft4Image
var iss,spacecraft,hasDocked=false

function preload(){
  issImage=loadImage("iss.png")
  spacecraft1Image=loadImage("spacecraft1.png")
  spacecraft2Image=loadImage("spacecraft2.png")
  spacecraft3Image=loadImage("spacecraft3.png")
  spacecraft4Image=loadImage("spacecraft4.png")
  bgImage=loadImage("spacebg.jpg")
}
function setup() {
  createCanvas(800,400);
 iss= createSprite(400, 200, 50, 50);
  iss.addImage(issImage)
  iss.scale=0.7

  spacecraft=createSprite(200,280)
  spacecraft.addImage(spacecraft1Image)
  spacecraft.scale=0.2
}

function draw() {
  background(bgImage);
  
  if(!hasDocked){
    spacecraft.x=spacecraft.x+Math.round(random(-1,1))

    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraft3Image)
spacecraft.x=spacecraft.x-1
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraft4Image)
spacecraft.x=spacecraft.x+1
    }
    if(keyDown("UP_ARROW")){
      spacecraft.addImage(spacecraft1Image)
spacecraft.y=spacecraft.y-1
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraft2Image)
spacecraft.y=spacecraft.y+1
    }
  }

  if(spacecraft.x<=(iss.x-80) && spacecraft.y<=(iss.y+50)){
    hasDocked=true
    stroke (0)
    fill ("yellow")
    text ("DOCKING SUCCESSFUL",400,350)
  }

  drawSprites();
}
