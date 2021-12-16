const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var torre;




function preload() {
   
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    torre = new Torre(600, 300, 200, 70);


   
}
function draw(){
background("white")
Engine.update(engine);
torre.display();


drawSprites();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


   
}

function mouseDragged(){
   
}


function mouseReleased(){
    
}

function keyPressed(){
    
}