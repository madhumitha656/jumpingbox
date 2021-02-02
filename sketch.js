var canvas;
var music;
var block1,block2,block3,block4,ball

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    block1 = createSprite(150,500,70,50) 
    block1.shapeColor="blue"
    block2 = createSprite(250,500,70,50)
    block2.shapeColor="green"
    block3 = createSprite(350,500,70,50)
    block3.shapeColor="red"
    block4 = createSprite(450,500,70,50)
    block4.shapeColor="yellow"
    ball = createSprite(300,100,30,30)
    ball.shapeColor="black"
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprite();
    ball.bounceOff(edges);

    if(block1.isTouching(ball)&&ball.bounceOff(block1)){
         ball.shapeColor=rgb(0,0,255);
         music.play();
        } 
    if(block2.isTouching(ball)&&ball.bounceOff(block1)){
        ball=shapeColor=rgb(255,128,0)
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
    }       
      if(block3.isTouching(ball)&&ball.bounceOff(block3)){
          ball.shapeColor=rgb(153,0,76);
      }
      if(block4.isTouching(ball)&&ball.bounceOff(block4)){
          ball.shapeColor=rgb(0,100,0);
      }
    
    //create edgeSprite


  drawSprites();
    //add condition to check if box touching surface and make it box
}
