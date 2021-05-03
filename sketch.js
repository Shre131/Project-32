const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var divisionHeight=300;
var particles=[];
var plinkos=[];
var divisions=[];
var engine, world;
var score=0;
var count=0;
var particle;
var gameState="START";

function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(400,790,800,10);
  for (var k=0; k<=width; k=k+80) {
    divisions.push(new Divisions (k, height-divisionHeight/2,10, divisionHeight));
  }

  for (var a=75; a<=width; a=a+50) {
    plinkos.push(new PLINKO (a,75,10));
  }

  for (var a=50; a<=width; a=a+50) {
    plinkos.push(new PLINKO (a,175,10));
  }

  for (var a=75; a<=width; a=a+50) {
    plinkos.push(new PLINKO (a,275,10));
  }

  for (var a=50; a<=width; a=a+50) {
    plinkos.push(new PLINKO (a,375,10));
  }
}       

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();

  textSize(20);
  text("Score: "+score,75,50);

  for(var i=0; i<plinkos.length;i++) {
    plinkos[i].display();
  }
  
  for(var i=0; i<divisions.length;i++) {
    divisions[i].display();
  }
if(frameCount%60===0) {
  particles.push(new PARTICLE(random(width/2-10, width/2+10), 10,10))
}

if(particle!=null){
  particle.display();
 if(particle.body.position.y>720) {
   if(particle.body.position.x<300) {
     score=score+500;
particle=null;
     if(count>5) {
       gameState="END";
     }
   }
   if(particle.body.position.x>301 && particle.body.position.x<600) {
    score=score+100;
    particle=null;
    if(count>5) {
      gameState="END";
    }
  }
  if(particle.body.position.x>601 && particle.body.position.x<900) {
    score=score+500;
    particle=null;
    if(count>5) {
      gameState="END";
    }
  }

  
 }
}

if(gameState==="END"){
  text("GAME OVER!", 400,800);
  
}

  
  
  

 
 

}
function keyPressed() {
  if(keyCode===32) {

  
  if(gameState!=="END") {
count++;
particle=new PARTICLE(mouseX,10,10,10);
  } 
}
}

