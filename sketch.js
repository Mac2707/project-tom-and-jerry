var tom
var jerry , background
function preload() {
  bgImg = loadImage("images/garden.png")
  tom1 = loadImage("images/cat1.png")
  tom2 = loadImage("images/cat2.png")
  tom3 = loadImage("images/cat3.png")
  tom4 = loadImage("images/cat4.png") 

  j1 = loadImage("images/mouse1.png")
  j2 = loadImage("images/mouse2.png")
  j3 = loadImage("images/mouse3.png")
  j4 = loadImage("images/mouse4.png") 

  
 

}
 
function setup(){
    createCanvas(1000,800);
    background = createSprite(300,250,1000,200)
    background.addImage("sa",bgImg)


    tom = createSprite(700,520,20,20)
    tom.addImage("wn",tom1)
    tom.scale = 0.13

    jerry = createSprite(200,520,20,20)
    jerry.addImage("sns",j1)
    jerry.scale =0.1


    
    
    
  

}

function draw() {
   
    keyPressed()
    

    if(tom.x - jerry.x <(tom.width - jerry.width)/2){
        tom.addImage("auwda",tom4)
        tom.changeImage("auwda")
        jerry.addImage("jnsd",j4)
        jerry.changeImage("jnsd")
        tom.velocityX = 0
    }


    drawSprites();
}


function keyPressed(){

if(keyCode === RIGHT_ARROW){
    jerry.addImage("anj",j3)
    jerry.changeImage("anj")
    tom.addImage("sasda",tom2)
    tom.changeImage("sasda")
    tom.frameDelay = 25
    tom.velocityX = -2

}


}
