let x;
let y;
let circleSize;

function setup() {
  createCanvas(displayWidth, displayHeight);
  noFill();
  strokeWeight(2);
  circleSize = 0;
  
}

function draw() {
  background(255);
  for (let i = 0; i < 5; i++){
    let d = circleSize - 25 * i;
    if (d > 0){
      var fade = map(d, 0, 200, 0, 255);
			stroke(fade);
      noFill();
      ellipse(x, y, d);
    }
  }
  circleSize = circleSize + 2;
 
}

function mousePressed(){
  x = mouseX;
  y = mouseY;
  circleSize = 0;
}

function touchStarted(){
  x = mouseX;
  y = mouseY;
  circleSize = 0;
}

function touchMoved() {
  return false;
}