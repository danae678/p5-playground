
let circles = [];
let colors = ['#fda403', '#e8751a', '#c51350', '#8a1253'];
let bgVal = 255;
let button;


function setup() {
  createCanvas(displayWidth, displayHeight);

  button = createButton('change background');
  button.position(0, 0);
  button.mousePressed(changeBG)

  for (let i = 0; i < 20; i++) {
    let x = 0
    let y = random(height);
    let diameter = random([50, 75, 100]);
    let color = random(colors);
    let c = new Circle(x, y, diameter, color);
    circles.push(c);
  }

}
function draw() {
  background(bgVal);
  for (let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();

  }
}
function touchStarted() {
  for (let i = 0; i < circles.length; i++) {
    circles[i].clicked(mouseX, mouseY);
  }
}

function mousePressed() {
  for (let i = 0; i < circles.length; i++) {
    circles[i].clicked(mouseX, mouseY);
  }
}

function changeBG() {
  if (bgVal == 255) {
    bgVal = 0;
  }
  else {
    bgVal = 255
  }
}
function touchMoved() {
  // otherwise the display will move around
  // with your touch :(
  return false;
}

class Circle {
  constructor(x, y, diameter, cColor) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.color = cColor;
    this.speed = random(1, 5);
  }
  move() {
    this.x += this.speed;
    if (this.x > width) {
      this.x = 0
    }

  }
  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  clicked() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.diameter / 2) {
      this.speed = this.speed + 1;
    }
    if (this.speed > 5) {
      this.speed = 1;
    }
  }

}