let onOff = [];

let col1; 
let col2; 
let col3;
let col4;
let col5;

function setup() {
  cnv = createCanvas(600, 600);
  cnv.position((windowWidth/2) - 300, 180);
  col1 = color("##f2f7f7");
  col2 = color("#71e7f0");
  col3 = color("#523102")
  col4 = color("#0d0d0d")
  col5 = color("#e3ffff") 

  let counter = 0;
  for (var x = 0; x < 20; x++) {
    for (var y = 0; y < 20; y++) {
      onOff[counter] = 0;

      counter++;
    }
  }

 print(onOff);
}

function draw() {
  background(220);

  var counter = 0;
  
  for (var x = 0; x < 20; x++) {
    for (var y = 0; y < 20; y++) {
      fill(255); 

      
      if (
        mouseX > x*30 &&
        mouseX < (x + 1) * 30 &&
        mouseY > y * 30 &&
        mouseY < (y + 1) * 30 &&
        mouseIsPressed == true
      ) {
        onOff[counter] = col2
        
      }
      
       if (
        mouseX > x*30 &&
        mouseX < (x + 1) * 30 &&
        mouseY > y * 30 &&
        mouseY < (y + 1) * 30 &&
        mouseY > 540 &&
        mouseIsPressed == true
      ) {
        onOff[counter] = col5
        
      }
       if (
        mouseX > x*30 &&
        mouseX < (x + 1) * 30 &&
        mouseY > y * 30 &&
        mouseY < (y + 1) * 30 &&
        mouseX > 150 &&
        mouseX < 450 &&
        mouseY > 330 &&
        mouseY < 540 &&
        mouseIsPressed == true
      ) {
        onOff[counter] = col1
        
      }
      
      if (
        mouseX > x*30 &&
        mouseX < (x + 1) * 30 &&
        mouseY > y * 30 &&
        mouseY < (y + 1) * 30 &&
        mouseX > 120 &&
        mouseX < 480 &&
        mouseY > 360 &&
        mouseY < 510 &&
        mouseIsPressed == true
      ) {
        onOff[counter] = col1
        
      }
      if (
        mouseX > x*30 &&
        mouseX < (x + 1) * 30 &&
        mouseY > y * 30 &&
        mouseY < (y + 1) * 30 &&
        mouseX > 180 &&
        mouseX < 420 &&
        mouseY > 180 &&
        mouseY < 330 &&
        mouseIsPressed == true
      ) {
        onOff[counter] = col1
        
      }
      if (
        mouseX > x*30 &&
        mouseX < (x + 1) * 30 &&
        mouseY > y * 30 &&
        mouseY < (y + 1) * 30 &&
        mouseX > 150 &&
        mouseX < 450 &&
        mouseY > 210 &&
        mouseY < 300 &&
        mouseIsPressed == true
      ) {
        onOff[counter] = col1
        
      }
      if (
        mouseX > x*30 &&
        mouseX < (x + 1) * 30 &&
        mouseY > y * 30 &&
        mouseY < (y + 1) * 30 &&
        mouseX > 210 &&
        mouseX < 390 &&
        mouseY > 30 &&
        mouseY < 180 &&
        mouseIsPressed == true
      ) {
        onOff[counter] = col1
        
      }
      if (
        mouseX > x*30 &&
        mouseX < (x + 1) * 30 &&
        mouseY > y * 30 &&
        mouseY < (y + 1) * 30 &&
        mouseX > 180 &&
        mouseX < 420 &&
        mouseY > 60 &&
        mouseY < 150 &&
        mouseIsPressed == true
      ) {
        onOff[counter] = col1
        
      }
      if (
        mouseX > x*30 &&
        mouseX < (x + 1) * 30 &&
        mouseY > y * 30 &&
        mouseY < (y + 1) * 30 &&
        mouseX > 240 &&
        mouseX < 270 &&
        mouseY > 60 &&
        mouseY < 90 &&
        mouseIsPressed == true
      ) {
        onOff[counter] = col4
        
      } 
      if (
        mouseX > x*30 &&
        mouseX < (x + 1) * 30 &&
        mouseY > y * 30 &&
        mouseY < (y + 1) * 30 &&
        mouseX > 330 &&
        mouseX < 360 &&
        mouseY > 60 &&
        mouseY < 90 &&
        mouseIsPressed == true
      ) {
        onOff[counter] = col4
        
      }  
      if (
        mouseX > x*30 &&
        mouseX < (x + 1) * 30 &&
        mouseY > y * 30 &&
        mouseY < (y + 1) * 30 &&
        mouseX > 330 &&
        mouseX < 360 &&
        mouseY > 120 &&
        mouseY < 150 &&
        mouseIsPressed == true
      ) {
        onOff[counter] = col4
        
      }  
      if (
        mouseX > x*30 &&
        mouseX < (x + 1) * 30 &&
        mouseY > y * 30 &&
        mouseY < (y + 1) * 30 &&
        mouseX > 240 &&
        mouseX < 270 &&
        mouseY > 120 &&
        mouseY < 150 &&
        mouseIsPressed == true
      ) {
        onOff[counter] = col4
        
      } 
      if (
        mouseX > x*30 &&
        mouseX < (x + 1) * 30 &&
        mouseY > y * 30 &&
        mouseY < (y + 1) * 30 &&
        mouseX > 270 &&
        mouseX < 330 &&
        mouseY > 150 &&
        mouseY < 180 &&
        mouseIsPressed == true
      ) {
        onOff[counter] = col4
        
      } 
      if (
        mouseX > x*30 &&
        mouseX < (x + 1) * 30 &&
        mouseY > y * 30 &&
        mouseY < (y + 1) * 30 &&
        mouseX > 270 &&
        mouseX < 330 &&
        mouseY > 210 &&
        mouseY < 270 &&
        mouseIsPressed == true
      ) {
        onOff[counter] = col4
        
      } 
      
       if (
        mouseX > x*30 &&
        mouseX < (x + 1) * 30 &&
        mouseY > y * 30 &&
        mouseY < (y + 1) * 30 &&
        mouseX > 270 &&
        mouseX < 330 &&
        mouseY > 330 &&
        mouseY < 390 &&
        mouseIsPressed == true
      ) {
        onOff[counter] = col4
        
      } 
      if (
        mouseX > x*30 &&
        mouseX < (x + 1) * 30 &&
        mouseY > y * 30 &&
        mouseY < (y + 1) * 30 &&
        mouseX > 270 &&
        mouseX < 330 &&
        mouseY > 330 &&
        mouseY < 390 &&
        mouseIsPressed == true
      ) {
        onOff[counter] = col4
        
      } 
      if (
        mouseX > x*30 &&
        mouseX < (x + 1) * 30 &&
        mouseY > y * 30 &&
        mouseY < (y + 1) * 30 &&
        mouseX > 120 &&
        mouseX < 150 &&
        mouseY > 240 &&
        mouseY < 270 &&
        mouseIsPressed == true
      ) {
        onOff[counter] = col3
        
      } 
      if (
        mouseX > x*30 &&
        mouseX < (x + 1) * 30 &&
        mouseY > y * 30 &&
        mouseY < (y + 1) * 30 &&
        mouseX > 450 &&
        mouseX < 480 &&
        mouseY > 240 &&
        mouseY < 270 &&
        mouseIsPressed == true
      ) {
        onOff[counter] = col3
        
      } 
      if (
        mouseX > x*30 &&
        mouseX < (x + 1) * 30 &&
        mouseY > y * 30 &&
        mouseY < (y + 1) * 30 &&
        mouseX > 90 &&
        mouseX < 120 &&
        mouseY > 210 &&
        mouseY < 240 &&
        mouseIsPressed == true
      ) {
        onOff[counter] = col3
        
      } 
      if (
        mouseX > x*30 &&
        mouseX < (x + 1) * 30 &&
        mouseY > y * 30 &&
        mouseY < (y + 1) * 30 &&
        mouseX > 480 &&
        mouseX < 510 &&
        mouseY > 210 &&
        mouseY < 240 &&
        mouseIsPressed == true
      ) {
        onOff[counter] = col3
        
      } 
       if (
        mouseX > x*30 &&
        mouseX < (x + 1) * 30 &&
        mouseY > y * 30 &&
        mouseY < (y + 1) * 30 &&
        mouseX > 60 &&
        mouseX < 90 &&
        mouseY > 180 &&
        mouseY < 210 &&
        mouseIsPressed == true
      ) {
        onOff[counter] = col3
        
      } 
      if (
        mouseX > x*30 &&
        mouseX < (x + 1) * 30 &&
        mouseY > y * 30 &&
        mouseY < (y + 1) * 30 &&
        mouseX > 510 &&
        mouseX < 540 &&
        mouseY > 180 &&
        mouseY < 210 &&
        mouseIsPressed == true
      ) {
        onOff[counter] = col3
        
      } 
      
      
      if (onOff[counter] != 0 ) {
        

        fill(onOff[counter]);
        
        
      } else {
        fill(255);
      }

      rect(x * 30, y * 30, 30, 30);
      stroke(1, 15)
      counter++;
      ;
   }
 }
}


function mousePressed() {
  print(onOff);
}