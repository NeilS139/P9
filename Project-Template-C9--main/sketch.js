
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{ 

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    box.x-=3;
    box.shapeColor="red";
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
    box.y-=3;
    box.shapeColor="green";
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
    box.y+=3;
    box.shapeColor="yellow";
  }

  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    box.x+=3;
    box.shapeColor="blue";
  }
  
  drawSprites();
}

