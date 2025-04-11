let startAngle = 0;
let deltaAngle = 130;
let canvas; 
let x = 0;
let xspeed = 3.5
let a = 0;
let aspeed = 2.5
let b = 0;
let bspeed = 3
let c = 0;
let cspeed = 1.5
let d = 0;
let dspeed = 2;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  canvas.position(0,0)
  canvas.style("z-index:-1")
  title = select("#id1");
  page1 = select("#page1")
  page2 = select("#page2")
  page3 = select("#page3")
  caption = select("caption")
  
}

function draw() {
  background(250, 220, 120, 10)
  let angle = startAngle;
  for (let y = 0; y <= height; y += 15) {
    let x = map(sin(angle), -1, 1, 0, width);
    noStroke()
    fill(200, 80, 240);
    rect(x, y, 11, 60);
    
    angle += deltaAngle;
  }
  
  
  startAngle += 0.5;
  
  //title.center()
  //caption.position(13, 100)
  
  page1.position(a, height/2.8)
  push()
  fill(252, 151, 194)
  noStroke()
  let recta = rect(a, height/3, 88,68)
  pop()
  
  a += aspeed
  if (a > width - 80 || a < 0) {
    aspeed = -aspeed;
}
  page2.position(b, height/1.65)
  push()
  fill(252, 121, 187)
  noStroke()
  let rectb = rect(b, height/1.7, 68,68)
  pop()
  b += bspeed
  if (b > width - 63 || b < 0) {
    bspeed = -bspeed;
}
  page3.position(c, height/1.2)
  push()
  fill(255, 163, 206)
  noStroke()
  let rectc = rect(c, height/1.23, 120,68)
  pop()
  c += cspeed
  if (c > width - 110 || c < 0) {
    cspeed = -cspeed;
}
}

function mouseDragged() {
  let angle = startAngle;
  for (let y = 0; y <= height; y += 15) {
    let x = map(sin(angle), -1, 1, 0, width);
    noStroke()
    fill(200, 80, 240);
    rect(x, y, 15, 60);
    angle += deltaAngle;
  }
  startAngle += 1;
  
}
function windowResized() {

  resizeCanvas(windowWidth, windowHeight); 

} 
