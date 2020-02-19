var bgc;
var pos;
var colors = ['rgb(48, 137, 189)', 'rgb(12, 143, 138)', 'rgb(235, 168, 46)', 'rgb(196, 0, 69)'];
var arr = new Array(30);
function setup(){
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  bgc = color(230, 40, 20);
  background(bgc);
  frameRate(30);
  pos=0;
}

function draw(){
  background(bgc);
  for(var i = 0; i < 30; i++){
    stroke(colors[i%4]);
    var ux = cos(i*PI/15+pos*0.00005);
    var uy = sin(i*PI/15+pos*0.00005);
    line(width/2+windowWidth*windowHeight*ux,height/2+windowWidth*windowHeight*uy,width-10,height/2);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bgc);
}

function mouseWheel(event){
  pos += (event.wheelDelta || -event.detail);
  print(pos);
}