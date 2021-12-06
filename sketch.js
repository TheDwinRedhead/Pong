//Circle
let xCircle = 300;
let yCircle = 200;
let diameter = 18;
let radius = diameter/2;
let speedXCircle = 8;
let speedYCircle = 7;

//Rect
let xRect = 0;
let yRect = 150;
let widthRect = 10
let heightRect = 80;
let xRectAdversary = 590;
let yRectAdversary = 150;

let speedYRect = 1.4;

//Score
let scorePlayer = 0
let scoreMachine = 0

let end = (xCircle - radius < xRect)



function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  showCircle(0);
  moveCircle(0);
  marginCollision(0);
  showRect(xRect, yRect)
  showRect(xRectAdversary,yRectAdversary);
  keyMove(0);
  collideRectCircle (0);
  collideRectCircle2 (0);
  moveRectAdversary (0);
  showScore(0);
  score(0);
  limitRect(0);
  limitRect2 (0);
  rStart (0);
}

function showCircle() {
  circle(xCircle,yCircle,diameter)
}

function moveCircle() {
  xCircle += speedXCircle;
  yCircle += speedYCircle;
}

function marginCollision() {
  if (xCircle + radius > width ||
     xCircle - radius < 0) {
    speedXCircle *= -1
  }
  if (yCircle - radius < 0 ||
     yCircle + radius > height) {speedYCircle *= -1}
}

function showRect(x,y) {
  rect (x, y, widthRect, heightRect)
}

function keyMove() {
  if (keyIsDown (UP_ARROW)){
        yRect += -7
      }
   if (keyIsDown (DOWN_ARROW)){
        yRect += 7
      }
}

function collideRectCircle () {
  if (xCircle - radius <= xRect + widthRect &&
     //o primeiro é para detectar se está passando da raquete//
      yCircle - radius < yRect + heightRect &&
     //o do meio é para detectar se a bolinha está passando por cima ou batendo na raquete//
      yCircle + radius > yRect) {
    //o último é para detectar se a bolinha está passando por baixo da raquete // 
    (speedXCircle *= -1)
  }
}

function collideRectCircle2 () {
  if (xCircle + radius >= xRectAdversary &&
      yCircle - radius < yRectAdversary + heightRect &&
      yCircle + radius > yRectAdversary) {
    (speedXCircle *= -1)
  }
}

function moveRectAdversary (){
  yRectAdversary = yCircle / 1.7 
  
}

function showScore(){
  fill (240, 146, 50)
  rect (140, 12, 30, 25)
  rect (440, 12, 30, 25)
  
  textSize (18)
  fill (255)
  text(scorePlayer, 150 , 30)
  fill (255)
  text(scoreMachine, 450, 30)
}

function score(){
 if (xCircle - radius < xRect){
      scoreMachine += +1;
  }
  if (xCircle + radius > xRectAdversary + widthRect){
      scorePlayer += +1;
  }
}


//limitando o movimento das raquetes
function limitRect (){
  if (yRect < 0) {
    yRect = 0
      }
  if (yRect + heightRect > 400){
    yRect = 320
  }
}

function limitRect2 (){
  if (yRectAdversary < 0) {
    yRectAdversary = 0
      }
  if (yRectAdversary + heightRect > 400){
    yRectAdversary = 320
  }
}

function rStart (){
  if (xCircle - radius < xRect || xCircle + radius > xRectAdversary + widthRect){
      print(scorePlayer)
  }
}