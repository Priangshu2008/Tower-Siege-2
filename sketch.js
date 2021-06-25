
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.body;
const Constraint = Matter.Constraint;

var ground, stand1, stand2;
var block1,  block2,  block3,  block4,  block5,  block6,  block7,  block8,  block9,  block10,  block11,
block12,  block13,  block14,  block15,  block16;

var block17, block18, block19, block20, block21, block22, block23, block24, block25;
var polygon_image, polygon;

var slingShot;


function preload(){

  polygon_img=loadImage("polygon.png");

}



function setup() {
  createCanvas(800,600);


  engine = Engine.create();
  world = engine.world;


  ground = new Ground(400,580,1000,20);
  stand1 = new Ground(640,250,220,20);
  stand2 = new Ground(330,450,250,20);
  //level one
  block1 = new Block(240,425,30,30);
  block2 = new Block(270,425,30,30);
  block3 = new Block(300,425,30,30);
  block4 = new Block(330,425,30,30);
  block5 = new Block(360,425,30,30);
  block6 = new Block(390,425,30,30);
  block7 = new Block(420,425,30,30);
  //level two
  block8 = new Block(270,395,30,30);
  block9 = new Block(300,395,30,30);
  block10 = new Block(330,395,30,30);
  block11 = new Block(360,395,30,30);
  block12 = new Block(390,395,30,30);
  //level three
  block13 = new Block(330,365,30,30);
  block14 = new Block(360,365,30,30);
  block15 = new Block(390,365,30,30);
  //top
  block16 = new Block(330,335,30,30);

  //set 2 for second stand
  block17 = new Block(580,225,30,30);
  block18 = new Block(610,225,30,30);
  block19 = new Block(640,225,30,30);
  block20 = new Block(670,225,30,30);
  block21 = new Block(700,225,30,30);
  //level two
  block22 = new Block(610,195,30,30);
  block23 = new Block(640,195,30,30);
  block24 = new Block(670,195,30,30);
  //top
  block25 = new Block(640,165,30,30);



  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new SlingShot(this.polygon,{x:150,y:200});




  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(rgb(146, 227, 102)); 
 
  ground.display();
  stand1.display();
  stand2.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();



  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();

  block25.display();

  slingShot.display();
 
  

  
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);



  drawSprites();
   
}
function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
if(keyCode === 32) {
    slingShot.attach(polygon);
}
}
