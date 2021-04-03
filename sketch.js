
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2, mango3, mango4,mango5,mango6,mango7,mango8;
var world,boy,stone,elastic;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango(1200,200,50);
	mango3 = new mango(1050,200,20);
    mango4 = new mango(950,200,40);
    mango5 = new mango(1030,130,35);
    mango6 = new mango(1120,225,25);
    mango7 = new mango(1120,180,20);
    mango8 = new mango(1100,25,20);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stone = new Stone(247,420,20);
	//elastic = new Rubber();

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
  stone.display();  
  groundObject.display();

  drawSprites();
}
