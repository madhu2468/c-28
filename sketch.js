
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tree;
var ground;
var boy;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6;
var slingshot;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;


ground = new Ground();
tree = new Tree();
boy = new Boy();
stone = new Stone();
mango1 = new Mango(670,300);
mango2 = new Mango(670,240);
mango3 = new Mango(720,300);
mango4 = new Mango(720,245);
mango5 = new Mango(630,300);
mango6 = new Mango(770,300);

slingshot = new Slingshot(stone.body,{x:140,y:385})

	Engine.run(engine);
  
}


function draw() {
	background(220);
	
	ground.display();
tree.display();
boy.display();
stone.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
slingshot.display();

detectCollison(stone,mango1);
detectCollison(stone,mango2);
detectCollison(stone,mango3);
detectCollison(stone,mango4);
detectCollison(stone,mango5);
detectCollison(stone,mango6);



}

function mouseDragged(){

	Matter.Body.setPosition(stone.body,{x:mouseX , y:mouseY});
	
	}

	function mouseReleased(){
		slingshot.release();
		}

function detectCollison(body1,body2){
	body1BodyPosition = body1.body.position
	body2BodyPosition = body2.body.position

var distance = dist(body2BodyPosition.x,body2BodyPosition.y,
	body1BodyPosition.x,body1BodyPosition.y)
if(distance<=body1.y+body2.y){
Matter.Body.setStatic(body1.body,false)

}
}
	
function keyPressed(){
	if(keyCode === 32){
			slingshot.attach(stone.body);
	}
}

