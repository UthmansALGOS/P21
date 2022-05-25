
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	paper = new Paper(100,600,10);

	ground = new Ground(400,680,800,20);

	leftside = new Dustbin(550,620,20,100);
	rightside = new Dustbin(670,620,20,100);
	bottom = new Dustbin(610,660,100,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

  paper.display();
  ground.display();
  leftside.display();
  rightside.display();
  bottom.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15});
	}
}

 