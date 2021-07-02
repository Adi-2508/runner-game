var runner,runner_running;

var track,trackImage;

var boundry1,boundry2

function preload(){
  //pre-load images
runner_running = loadAnimation("Runner-1.png","Runner-2.png");
  
trackImage = loadImage("path.png");
}


function setup(){
  createCanvas(400,400);
  //create sprites here
  runner = createSprite(300,320,20,50);
  runner.addAnimation("running", runner_running);
  runner.scale = 0.5;

  //create track sprite
  track = createSprite(200,200);
  track.addImage("track",trackImage);
  track.velocityY = 4
  track.scale=1.2

  boundry1 = createSprite(0,200,10,400);
  boundry1.visible=false;

  boundry2 = createSprite(390,200,10,400)
  boundry2.visible=false;

  if(track > 400){
    track.y = track.height/2;
  }




}

function draw() {
  background(0);







runner.collide(track);
runner.collide(boundry1);
runner.collide(boundry2);
drawSprites();
}
