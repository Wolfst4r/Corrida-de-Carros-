var bg;
var player;
var quadras;
function preload() {
    bg = loadImage("./assests/bg.jpeg");
}

function setup() {
    createCanvas(824, 768);
    player = createSprite(200,2240, 10,10);
    player.shapeColor = "red"

    quadras = new Group();

    geradorQuadras();
}

function draw() {
    background("black");
    image(bg, 0,0,width*3, height*3);

    // console.log("player: "+player.x, player.y)
    // console.log(camera.position.x, camera.position.y)

//ajustando a camera do jogo!
    camera.position.x =  player.x ;
    camera.position.y =  player.y ;
    

    player.collide(quadras)

    drawSprites();
    controls();
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
    var quadra1 = createSprite(1218,2240, 750,500);
    quadra1.shapeColor = "blue";
    quadras.add(quadra1);

    var quadra2 = createSprite(438,2100, 750,500);
    quadra2.shapeColor = "blue";
    quadras.add(quadra2);
    // quadras2.rotation = quadras2.rotation + 33
}