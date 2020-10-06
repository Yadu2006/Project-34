//Create variables here
var dog, happyDog, datbase, foodS, foodStock;

function preload()
{
  //load images here
  dogAnimation = loadImage("dogImg.png");
  dogAnimation2 = loadImage("dogImg1.png");

}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250, 250, 20, 20);
  dog.addImage(dogAnimation);
  dog.scale = 0.3;

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  

  background(46, 139, 87);

  fill("white");
  text("Press the up arrow yo feed the dog", 150, 20);

  if(keyWentDown(UP_ARROW))
  {

    writeStock(foodS);
    dog.addImage(dogAnimation2);

  }
  if(keyWentUp(UP_ARROW))
  {

    writeStock(foodS);
    dog.addImage(dogAnimation);

  }

  drawSprites();
  //add styles here

}

function readStock(data)
{

  foodS = data.val();

}
function writeStock(x)
{

  if(x <= 0)
  {

    x = 0;
  
  }
  else
  {

    x = x- 1;

  }

    database.ref('/').update({
    Food:x
  })

}



