const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3,box4, box5;
var Pig1, Pig2;
var Log1, Log2, Log3, Log4;
var Bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(870,300,70,70);
    box2 = new Box(650,300,70,70);
    ground = new Ground(600,height,1200,20)
    Pig1 = new Pig(760,300);
    Log1 = new Log(760,260,300,PI/2);
    box3 = new Box(870,250,70,70);
    box4 = new Box(650,250,70,70);
    Pig2 = new Pig(760,250);
    Log2 = new Log(760,240,300,PI/2);
    box5 = new Box(760,230,70,70);
    Log3 = new Log(680,200,150,PI/4);
    Log4 = new Log(840,200,150,-PI/4);
    Bird1 = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    Pig1.display();
    Log1.display();
    box3.display();
    box4.display();
    Pig2.display();
    Log2.display();
    box5.display();
    Log3.display();
    Log4.display();
    Bird1.display();
}