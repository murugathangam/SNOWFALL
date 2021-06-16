const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var bg = "snow3.jpg";
var snow;


function setup() {
  
  createCanvas(800,400);

   snow = new snowfall(200,200,20,20);
    
}

function draw() {
  background(bg);

  Engine.update(engine);
  snow.display();  
  drawSprites();
}