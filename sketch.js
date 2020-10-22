
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var Ground = createSprite(795,700,20,20);
	var ball = createSprite(200,795,25,25);
	var box = createSprite(400,350,25,25);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyDown(UP_ARROW)){
     Ball.velocityX = Box.x; 
  }
  
  drawSprites();
 
}



