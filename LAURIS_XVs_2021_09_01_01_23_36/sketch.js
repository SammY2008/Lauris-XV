//Crear estados del Juego END y PLAY
  var PLAY = 1;
  var END = 0;
  var gameState = PLAY;


  var gameOverImg;
  var restartImg;
  var money, MoneyImg;
  var billetes, billetesImg;
  var here, hereImg;
  var click, clickImg;


  function preload(){
  
  
  
  
  
  //Imagen de cuando se acaba el juego
  gameOverImg = loadImage("XV.jpg");
  //imagen del signo de reinicio
  restartImg = loadImage("Sobre.jpg");
  
  moneyImg = loadImage("dinero.png");
  dineroImg = loadImage("billetes.png");
  hereImg = loadImage("aqui.png");
  clickImg = loadImage("click.jpg");
 
  
}

function setup() {
  createCanvas(600, 800);

  
  
  
  
  //crear signo de reinicio
  restart = createSprite(445,607,10,10);
  restart.addImage(restartImg);
  restart.scale = 0.02;
  
  //crear game over
  gameOver = createSprite(230,380,40,10);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.3
  
  money = createSprite(300,400,20,20);
  money.addImage(moneyImg);
  money.scale = 0.3;
  money.visible = false;
  
  dinero = createSprite(300,400,20,20);
  dinero.addImage(dineroImg);
  dinero.scale = 0.4;
  dinero.visible = false;
  
  here = createSprite(445, 570, 10,10);
  here.addImage(hereImg);
  here.scale = 0.2;
      
  click = createSprite(300,700,10,10);
  click.addImage(clickImg);
  click.scale = 0.2;
  click.visible = false;
  
  
  
  
}

  function draw() {
    background("pink");

    if(mousePressedOver(restart)){
      gameOver.visible = false;
      restart.visible = false;
      money.visible = false;
      dinero.visible = true;
      here.visible = false;
      click.visible = true;
    }
      if(mousePressedOver(click)){
        dinero.visible = false;
        money.visible = true;
        click.visible = false;
      
    }
    textSize(100);
    fill("white")
   text("$600!!!", 150,420);
  
  
  
//Condiciones para estado de juego PLAY

   
     

      
    
     

    
  restart.depth = restart.depth +2;
  here.depth = here.depth +2;
  

  drawSprites();
}

 
    
    
  