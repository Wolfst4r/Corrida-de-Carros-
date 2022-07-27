var bg;
var player;
function preload() {
    bg = loadImage("./assests/bg.jpeg");
}

function setup() {
    createCanvas(824, 768);
    player = createSprite(200,200, 10,10);
    player.shapeColor = "red"
}

function draw() {
    background("black");
    image(bg, 0,0,width*3, height*3);
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