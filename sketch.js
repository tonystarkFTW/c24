const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var boxes1
var land
var box2,pig1,log1,box3,box4,pig2,log2,box5,log3,log4,bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    boxes1 = new box(700,320,70,70);
    box2 = new box(920,320,70,70);
    pig1= new pig(810,350);
    land = new ground(600,390,1200,20);
    log1 = new log(810,260,300,PI/2);
    box3 = new box(700,250,70,70);
    box4 = new box(920,240,70,70);
    pig2 = new pig(810,220);
    box5 = new box(800,160,70,70);
    log3 = new log(760,120,150,PI/7)
    log2 = new log (810,180,300,PI/2);
    log4 = new log(865,120,150,-PI/7);
    bird1 = new bird(100,100);
    }

function draw(){
    background(0);
    Engine.update(engine);
    boxes1.display();
    land.display();
    box2.display();
    pig1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    box3.display();
    box4.display();
    box5.display();
    pig2.display();
    bird1.display();
}