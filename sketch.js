const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var particles = [];
var plinko = [];
var division = [];

var divisionHeight = 300;

function setup() {
    createCanvas(480, 800);
    engine = Engine.create();
    world = engine.world;

    ground = new Division(240,800,500,20);

    for(var a = 0; a <= width; a += 80){
      division.push(new Division(a, height-divisionHeight/2, 10, divisionHeight));
    }

    for(var b = 40; b <= width; b = b+50){
      plinko.push(new Plinko(b,75,10));
    }

    for(var b = 15; b <= width-10; b = b+50){
      plinko.push(new Plinko(b,175,10));
    }

    

}

function draw() {
    background("grey");
    Engine.update(engine);

    if(frameCount%250===0){
      for(var b = 15; b <= width-10; b = b+50){
        particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
      }
      
    }

    for(var d = 0; d<particles.length; d++){
      particles[d].display();
    }

    for(var b = 0; b<plinko.length; b++){
      plinko[b].display();
    }

    for(var a = 0; a<division.length; a++){
      division[a].display();
    }

    

    ground.display();

    
}