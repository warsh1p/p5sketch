var diam1=0;

function setup() {
    createCanvas(1650,900);
    background("#003366");
}

function draw() {
    background("#003366");
    fill("#add8e6");
    stroke("white");
    strokeWeight(7);
    ellipse(450,450,diam1,diam1);
    diam1=diam1+5;
    //textFont("Georgia");
    //textStyle(ITALIC);
    //textAlign(CENTER);
    //text("Hello World!",330,100):

}

function mousePressed(){
  if(diam1>0){
      diam1=0;
  }else{
      diam1=diam1+5;
  }
}