
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;



	var boy1,boy2;

	function preload()
	{
    boy1 = loadImage("Plucking+mangoes/boy.png")
	
	}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
    boy2 = createSprite(50,50,10,10);
    boy2.addImage(boy1);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	boy2.display();


  drawSprites();
}



