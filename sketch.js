const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var l1,l2,l3,l4,l5,l6,l7
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var f1,f2,f3,f4,f5;



function setup() {
  createCanvas(480,800);
 ground = new Ground(480,800,1000,5)
 l1 = new Ground(480,798,5,50);
 l2 = new Ground(450,798,5,50);
 l3 = new Ground(420,798,5,50);
 l4 = new Ground(390,798,5,50);
 l5 = new Ground(360,798,5,50);
 l6 = new Ground(330,798,5,50);
 l7 = new Ground(300,798,5,50);
 b1 = new Ball(470,750);
 b2 = new Ball(440,750);
 b3 = new Ball(410,750);
 b4 = new Ball(380,750);
 b5 = new Ball(350,710);
 b6 = new Ball(460,710);
 b7 = new Ball(430,710);
 b8 = new Ball(400,710);
 b9 = new Ball(370,710);
 b10 = new Ball(340,710);
 f1 = new FallingBall(470,0);
 f2 = new FallingBall(440,0);
 f3 = new FallingBall(410,0);
 f4 = new FallingBall(380,0);
 f5 = new FallingBall(350,0);
}

function draw() {
  background(255,255,255); 
ground.display();
l1.display();
l2.display();
l3.display();
l4.display();
l5.display();
l6.display();
l7.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
f1.display();
f2.display();
f3.display();
f4.display();
f5.display();


  drawSprites();
}