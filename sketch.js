var bg;
var player;
var quadras;

var gameState = 0;

// 0 = menu
// 1 =  escolha o carro
// 2 = historinha
// 3 = play

var title, input, playerName, playButton, displayName;

function preload() {
    bg = loadImage("./assests/bg.jpeg");
}

function setup() {
    createCanvas(824, 768);
    player = createSprite(1870, 1920, 10,10);
    player.shapeColor = "red"

    quadras = new Group();

    geradorQuadras();


    // criação do "menu"
    title = createElement("h1","Corrida de Carros");
    title.class("title");

    input =  this.input = createInput("").attribute("placeholder", "Digite Seu Nome");;
    input.class("customInput");

    playButton = createButton("play");
    playButton.class("customButton");
    playButton.mouseClicked(()=>{
        gameState = 1;
    })

    displayName = createElement("h3");
    displayName.class("display");

}

function draw() {
    background("black");
   

     //console.log("player: "+player.x, player.y)
    // console.log(camera.position.x, camera.position.y)

//ajustando a camera do jogo!
    
    

   


    if(gameState == 0 ){
        playerName = input.value();
        //console.log(playerName)
    }

    if(gameState == 1){
        hideMenu();
        displayName.html(playerName);
        image(bg, 0,0,width*3, height*3);
        player.collide(quadras);

        camera.position.x =  player.x ;
        camera.position.y =  player.y ;

        drawSprites();
        controls();
    }

   
}


function controls(){
    if (keyDown(LEFT_ARROW)){
        player.x -= 5;
    }
    if (keyDown(RIGHT_ARROW)){
        player.x += 5;
    }
    if (keyDown(UP_ARROW)){
        player.y -= 5;
    }
    if (keyDown(DOWN_ARROW)){
        player.y += 5;
    }
}


function geradorQuadras(){
    var quadra1 = createSprite(1232,2245, 707,500);
    quadra1.shapeColor = "blue";
    quadras.add(quadra1);

   var quadra2 = createSprite(1816, 2010, 380, 30)
   quadra2.shapeColor = "blue";
    quadras.add(quadra2);
    
   
   // quadras2.rotation = quadras2.rotation + 33

    var quadra3 = createSprite(1640, 2200, 30, 380)
    quadra3.shapeColor = "blue";
    quadras.add(quadra3);

    var quadra4 = createSprite(1640, 2010, 380, 30)
    quadras.add(quadra4);
}

function hideMenu(){
    playButton.hide();
    title.hide();
    input.hide();
}