const Engine = Matter.Engine
 //Events = Matter.Events,
const Bodies = Matter.Bodies
const World = Matter.World



var bg, guy
var engine, world
var snowflake = []

function preload(){
  bg = loadImage("snow1.jpg")
  guy = loadImage("snowman.png")

}

function setup() {
  createCanvas(800,400);

  engine = Engine.create()
  world = engine.world



  var ground = createSprite(400, 200, 50, 50);
  ground.addImage(bg)
  ground.scale = 1.6
  var man = createSprite(650,300,20,20)
  man.addImage(guy)
  man.scale = 0.5
}

function draw() {
  background(0);  
  
  Engine.update(engine);
  drawSprites();
  if (frameCount%15 === 0){
    snowflake.push(new snow(random(100,700), 0) )
    }

    for(var p = 0; p< snowflake.length; p++){
      snowflake[p].display();
    }
  
}