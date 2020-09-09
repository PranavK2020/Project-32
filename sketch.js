var base1, base2 ;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16 ;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  //level one
  block1 = new Box

  //level two
  block8 = new Box(330, 235, 30, 40);
  block9 = new Box(360, 235, 30, 40);
  block10 = new Box(390, 235, 30, 40);
  block11 = new Box(420, 235, 30, 40);
  block12 = new Box(450, 235, 30, 40);

  //level three
  block13 = new Box(360, 195, 30, 40);
  block14 = new Box(390, 195, 30, 40);
  block15 = new Box(420, 195, 30, 40);

  //top
  block16 = new Box(390, 155, 30, 40);

  drawSprites();
}