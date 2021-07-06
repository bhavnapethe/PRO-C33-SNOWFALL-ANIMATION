const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

var bg;
var world,engine;
var maxsnow = 50;
var ice = []
var ice1

function preload(){
 bg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(1000,600);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create()
  world = engine.world;

  if(frameCount%200===0){
    for(var i=0;i<maxsnow;i=i+1){
  ice1 = new Snow(random(0,1000),random(0,50))
      ice.push(ice1)
        }
  }
}

function draw() {
  background(bg);
  drawSprites();
  Engine.update(engine);

  for(var i=0;i<maxsnow;i=i+1){
  ice[i].display();
  ice[i].changePosition();
}
}