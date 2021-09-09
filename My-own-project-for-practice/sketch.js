var background, backgroundImg;
var ballImg, ball;
var brick, brickImg,  bricksGroup;
var paddle;
var gameState=1;
var gameState="serve"
function preload(){
    ballImg = loadImage("own game ball .png");
    brickImg = loadImage("own game block.PNG")
}

function setup(){
    createCanvas(990, 620)
    
    paddle=createSprite(508, 560, 120, 10 )
    paddle.shapeColor=color(0, 255, 0);
    
    ball=createSprite(508, 540, 15, 15)
    
    ball.addImage(ballImg)
    ball.scale=0.2;

    bricksGroup=createGroup();

}


function draw(){
    background("blue")
    paddle.x=mouseX

    if (gameState==="serve"){
        
        text("press spacebar to play", 495, 310);
        ball.velocityX=0;
        ball.velocityY=0;
        ball.x=508;
        ball.y=540;

    }
    else if(gameState==="end"){

        text("Game Over", 495, 310);
        ball.remove;
    }



    if(keyDown("space")){
        gameState="play"
        ball.velocityX=8;
        ball.velocityY=-8;
    }

    if(gameState==="play"){
        CreateBrick();
    }
 
    


    


    drawSprites();
}

function CreateBrick(){
    for(i=0; i<800;i=i+90){
        brick=createSprite(i+100,100 , 80, 20)
        brick.addImage(brickImg)
        bricksGroup.add(brick)
    }

    for(i=0; i<800;i=i+90){
        brick=createSprite(i+100,160 , 80, 20)
        brick.addImage(brickImg)
        bricksGroup.add(brick)
    }

    for(i=0; i<800;i=i+90){
        brick=createSprite(i+100,225 , 80, 20)
        brick.addImage(brickImg)
        bricksGroup.add(brick)
    }

    for(i=0; i<800;i=i+90){
        brick=createSprite(i+100,290 , 80, 20)
        brick.addImage(brickImg)
        bricksGroup.add(brick)
    }

    
    
}
