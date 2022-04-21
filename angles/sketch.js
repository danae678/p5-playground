let angle = 0;
let radius = 100;
let r, g, b; 


function setup() {
  createCanvas(400, 400);
  stroke(235, 38, 50)
}

function draw() {
  background(255);
  strokeWeight(4);
  //stroke(0)
  translate(200,200)
  noFill();
  //circle(0,0, radius * 2);
  
  //strokeWeight(15);
  
  // let x = radius * cos(angle)
  // let y = radius * sin(angle)

  // point(x,y)
  // angle += 0.05
  
  // point((x/2), -(y/2)
  
  let increment = map(mouseX, 0.1, width, 0.01, PI);

  beginShape();
  for (let a = 0; a < TWO_PI; a += increment){
    let x = radius * cos(a);
    let y = radius * sin(a);
    vertex(x,y);
  }



  endShape(CLOSE);



}






// function mousePressed(){
//   r = random(255); 
//   g = random(255); 
//   b = random(255); 
//   stroke(r,g,b);
// }

