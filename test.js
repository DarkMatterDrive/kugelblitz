let pix, pix2, bkg1b;
let speed = 0.125;
let timer;
var VW = 300;
var VH = 300;

if (VW >= VH){
var REM = VH/16;
}else{
var REM = VW/16;
}

let Upscale = 2
VW = VW * Upscale;
VH = VH * Upscale;
REM = REM * Upscale;

let PlayerOneY = 0*REM;
let PlayerOneX = 4*REM;

let PlayerTwoY = 0*REM;
let PlayerTwoX = 8*REM;

function preload(){
p1img = loadImage("./Astronaut_Blue.png");
p2img = loadImage("./Astronaut_Blue.png");
bkg1b = loadImage("./bkg1b.jpg");
}

function setup() {
  createCanvas(VW, VH);
  textSize(1*REM);
}

function draw() {
  background(0,155,155);
  image(bkg1b, 0*REM,0*REM,16*REM,20*REM);
  fill(255,0,0);
  //square(155,boxY,20);
  noSmooth()
  image(p1img,PlayerOneX,PlayerOneY,1*REM,1*REM);
  image(p2img,PlayerTwoX,PlayerTwoY,1*REM,1*REM);
  
  if (PlayerOneY < 0){
  PlayerOneY=1;
  }
  if (PlayerTwoY < 0){
  PlayerTwoY=1;
  }
  
  if (PlayerOneY > 9*REM){
  fill(255)
  }else{
  fill(255)
    PlayerOneY += 0.5*speed*REM;
  }
  
  if (PlayerTwoY > 9*REM){
  fill(255)
  }else{
  fill(255)
    PlayerTwoY += 0.5*speed*REM;
  }
  
}
function mouseClicked(){
  boxY -= 1*REM;
//speed += 0.01;
}

function keyPressed(){
  
if (/*key == " " || */keyCode == UP_ARROW){
boxY -= 1*REM;
}if (keyCode == RIGHT_ARROW){
boxX += 1*REM;
}
if (keyCode == LEFT_ARROW){
boxX -= 1*REM;
}
if (keyCode == DOWN_ARROW){
  speed = 1;
}else{
  speed = 0.125;
}
  
if (key == "w" ){
PlayerOneY -= 1*REM;
}
if (key == "a" ){
PlayerOneX -= 1*REM;
}
if (key == "d" ){
PlayerOneX += 1*REM;
}
  
}
