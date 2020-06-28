
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player

function setup() {
  createCanvas(1000,700);
  engine = Engine.create();
  world = engine.world;
  player=new Player(200,200,50)
  rope= new Slingshot(player.body,{x:150,y:200})
  platform1=new Platform(500,400,250,10)
  block1=new Box(500,405,50,60)

}

function draw() {
  background(255,255,255); 
  player.display();
  rope.display()
  platform1.display()
  block1.display()
  drawSprites();

}
function mouseDragged(){
  Matter.Body.setPosition(player.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  rope.fly()
}
