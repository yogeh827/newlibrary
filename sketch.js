var fixedRect,movingRect;
var rect1,rect2,rect3;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  rect1 = createSprite(500,100,50,80);
  rect2 = createSprite(370,100,50,80);
  rect3 =createSprite(280,100,50,80);
}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(istouching(movingRect,fixedRect)){
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}
else if(istouching(movingRect,rect1)){
  movingRect.shapeColor="yellow";
  rect1.shapeColor="yellow";
}
else if(istouching(movingRect,rect2)){
  movingRect.shapeColor = "blue";
  rect2.shapeColor = "blue";
}
else if(istouching(movingRect,rect3)){
  movingRect.shapeColor = "white";
  rect3.shapeColor = "white";
}
else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  rect1.shapeColor = "green";
  rect2.shapeColor = "green";
  rect3.shapeColor = "green";
}
  drawSprites();
}
