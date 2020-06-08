var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var roof1; 
var bob1,bob2,bob3;
var rope1,rope2,rope2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roof1=new Roof(150,20,700,20);
	bob1=new Bob(100,220,30);
	bob2=new Bob(150,220,30);
	bob3=new Bob(190,220,30);

rope1=new Chain(bob1.body,roof1.body,30,0);
rope2=new Chain(bob2.body,roof1.body,30,10);
rope3=new Chain(bob3.body,roof1.body,30,0);
	
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(180);

  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
 rope1.display();
 rope2.display();
 rope3.display();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-80,y:85});

	}
}
