
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine,world

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bobDiameter=40
	startBobPositionX=width/2
	startBobPositionY=height/4+500
	bob1= new Bob(startBobPositionX-bobDiameter-2,10,startBobPositionY,bobDiameter)
	bob2= new Bob(startBobPositionX-bobDiameter,startBobPositionY-bobDiameter)
	bob3= new Bpb(startBobPositionX,startBobPositionY,bobDiameter)
	bob4= new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter)
	bob5= new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter)
	bar= new Bar(width/2,height/4,width/7,20)
	

	//Create the Bodies Here.
	
	ground= new Ground(400,680,800,20)
	chain = new Chain(bob.body,bar.body)
	rope1= new Rope(bob1.body,bar.body,-bobDiameter*2,0)
	rope2= new Rope(bob2.body,bar.body,-bobDiameter*1,0)
	rope3= new Rope(bob3.body.body,bar.body,0,0)
	rope4= new Rope(bob1.body,bar.body,+bobDiameter*2,0)
	rope5= new Rope(bob2.body,bar.body,+bobDiameter*1,0)


	
  
}


function draw() {
  
  background(0);
  Engine.update(engine)
  bar.display()
  bob.display()
  ground.display()
  chain.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
 
}



