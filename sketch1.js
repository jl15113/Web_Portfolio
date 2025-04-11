let sketch = function(p) {
  let vid; 
  let vScale = 8;
  let song; 

  p.preload = function(){ 
    song = p.loadSound('song.mp3');
  }

  p.setup = function() {
    cnv = p.createCanvas(640,520);
    cnv.position((p.windowWidth/2) - 320, 180);
    p.background(200);
    p.pixelDensity(1);

    vid =  p.createCapture(p.VIDEO, {flipped:true});
    vid.size(p.width/vScale, p.height/vScale);
    vid.hide();
  }
  let r = 1;

  p.draw = function() {

  vid.loadPixels();

  for(let x = 0; x<vid.width; x++){
    for(let y = 0; y<vid.height; y++){
      
      index = (x + y * vid.width) * 4;
      
      let r = vid.pixels[index]
      p.rect(x*vScale,y*vScale, vScale, vScale);
      let c = p.map(p.mouseX, 0, p.width, 0, 150);
      let d = p.map(p.mouseY, 0, p.height, 0, 150);
      let e = p.random(150);
      p.fill(r+e,r+d,r+c);
    }
  }
  vid.updatePixels();
    
  }
  let counter = 0;
  p.mousePressed = function() {

    if(counter%2==0){
      song.loop();
      vid.play()
    }
    else{
      song.pause();
      vid.pause(2)

    }

    counter++;


   }
}

let playsketch1 = new p5(sketch)
