
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,dustbin1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
   paper1=new paper(100,100,30) 
   dustbin1=new dustbin(300,680,50,100)
   ground=createSprite(400,690,800,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  dustbin1.display();

  function keyPressed(){
    if(keyCode === UP_ARROW){
  
      Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  
  
  }
  }
  
  drawSprites();
 
}
 


