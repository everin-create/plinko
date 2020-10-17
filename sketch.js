const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles=[]
var plinkos=[]
var divisions=[]
var divisionH=[]

function setup() {
  createCanvas(480,800);
  engine = Engine.create();

  ground= new Ground(240,790,20);

for(var i=0;k<=width;k=k+80){
  divisions.push(new Division(height+divisionH,10,divisionH));
}

for(var j=40;j<=width;j=j+50){
   plinkos.push(new Plinko(j,75))
}

for(var j=15;j<=width;j=j+50){
  plinkos.push(new Plinko(j,175))
}

}

function draw() {
  background(255,255,255); 
  ground.display(); 

 if(frameCount%60===0){
   particles.push(new Particle(random(width/2*10,width/2+10,10,10)))
 }

  for(var i=0;i<particles.length;i++){
    particles[i].display();
  }
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }

  for(var j=0;k<plinkos.length;j++){
    plinkos[j].display();
  }
}