const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, ground, ball;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  var obj_option = {isStatic: true};
  ground = Bodies.rectangle(200, 380, 400, 40, obj_option);
  World.add(world, ground);

  var ball_option = {restitution: 1.0};
  ball = Bodies.circle(100, 100, 20, ball_option);
  World.add(world, ball);

  console.log(ground.type);
  console.log(ground);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 40);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}