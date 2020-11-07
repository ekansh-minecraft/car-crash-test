
var wall;
var car;
var speed;
var weight;
var deformation;

function setup()
{
  createCanvas(800,800);
  wall = createSprite(700,400,20,100)
  wall.shapeColor = "purple"
  car = createSprite(20, 400 , 20, 20);
  car.shapeColor = "cyan"
}

function draw() 
{
  background("black");
  drawSprites()

  if(keyDown("space"))
  {
    go()
    
  }
  if(car.isTouching(wall))
  {
    car.velocityX  = 0
    var deformation = 0.5*weight*speed*speed/22500
    console.log("Weight: " + weight)
    console.log("Speed: " + speed)
    //console.log(deformation)

    if(deformation > 180)
    {
      car.shapeColor = "red"
      textSize(19)
      fill("red")
      text("this speed was lethal",300,100)
    }
    if(deformation > 80 && deformation < 180)
    {
      car.shapeColor = "yellow"
      textSize(19)
      fill("yellow")
      text("this speed was average",300,100)
    }
    if(deformation < 80)
    {
      car.shapeColor = "green"
      textSize(19)
      fill("green")
      text("this speed was safe",100,300)
    }
    if(keyDown("r"))
    {
       reset()
    }
  }

  
}

function go()
{
  speed = random(55,90)
  weight = random(400,1500)
  car.velocityX = speed
  console.log("Go")
}

function reset()
{
  car.y = 400
  car.x = 20
  car.velocityX = 0
  car.shapeColor = "cyan"
}







