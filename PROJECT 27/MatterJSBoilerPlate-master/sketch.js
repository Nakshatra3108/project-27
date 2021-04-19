
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof= new Roof(375,100,600,20)
	bobObject1= new Bob(150,500,50)
	bobObject2= new Bob(250,500,50)
	bobObject3= new Bob(350,500,50)
	bobObject4= new Bob(450,500,50)
	bobObject5= new Bob(550,500,50)
	rope1= new Rope(bobObject1.body,roof.body,-200,0)
	rope2= new Rope(bobObject2.body,roof.body,-100,0)
	rope3= new Rope(bobObject3.body,roof.body,0,0)
	rope4= new Rope(bobObject4.body,roof.body,100,0)
	rope5= new Rope(bobObject5.body,roof.body,200,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  roof.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-1000,y:-1000}); } 
} 

