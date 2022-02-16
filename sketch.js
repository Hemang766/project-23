var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6


	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)


	holderSprite1 = createSprite(width / 2, height - 50, 200, 20);
	holderSprite1.shapeColor = color("red")


	holderSprite2 = createSprite(500, height - 90, 20, 100);
	holderSprite2.shapeColor = color("red")


	holderSprite3 = createSprite(300, height - 90, 20, 100);
	holderSprite3.shapeColor = color("red")




	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 0.5, isStatic: true });
	World.add(world, packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, ground);
	holder1 = Bodies.rectangle(width / 2, height - 50, 200, 20, { isStatic: true });
	World.add(world, holder1);
	holder3 = Bodies.rectangle(500, height - 90, 20, 100, { isStatic: true });
	World.add(world, holder3);
	holder2 = Bodies.rectangle(500, height - 90, 20, 100, { isStatic: true });
	World.add(world, holder2);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y





	drawSprites();

}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
	}

	else if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x = helicopterSprite.x + 20;
		translation = { x: 20, y: 0 }
		Matter.Body.translate(packageBody, translation)
		// packageBody.position.x = packageBody.position.x + 20;
		// packageSprite.x = packageSprite.x + 5;
	}

	else if (keyCode === LEFT_ARROW) {
		helicopterSprite.x = helicopterSprite.x - 20;
		translation = { x: -20, y: 0 }
		Matter.Body.translate(packageBody, translation)

		// packageSprite.x = packageSprite.x - 5;
		// packageBody.position.x = packageBody.position.x - 5;

	}

}
