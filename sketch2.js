let startAngle = 0;
let deltaAngle = 130;

function setup() {
  createCanvas(windowWidth - 2, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(80, 200, 220);

  let angle = startAngle;
  for (let y = 0; y <= height; y += 1.5) {
    let x = map(sin(angle), -1, 1, 2, width);
    stroke(100, 220, 250);
    fill(80, 200, 220);
    circle(x, y, width/8);
    angle += deltaAngle;
  }
  startAngle += 0.2;
}

function windowResized() {
  background(80, 200, 220);

  let angle = startAngle;
  for (let y = 0; y <= height; y += 1.5) {
    let x = map(sin(angle), -1, 1, 2, width);
    stroke(100, 220, 250);
    fill(80, 200, 220);
    circle(x, y, width/8);
    angle += deltaAngle;
  }
  startAngle += 0.2;
  
  
}

function windowResized() {

  resizeCanvas(windowWidth - 2, windowHeight); 

} 