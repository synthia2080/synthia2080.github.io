function setup() {
  createCanvas(400, 400);
  noFill();
  noLoop();
}

function draw() {
  background(220);
  angleMode(DEGREES);
  for(let i = 0; i < width * 2; i+= 20){
    
    circle(200,200, i);
    
  }
  
  
  for(let i = 0; i < width  ; i+= 10){

    // circle(400,200, i);
    arc(300 + i, 200, 200, 1200, 90, 270);
    
  }
  for(let i = 0; i < width  ; i+= 10){

    // circle(400,200, i);
    arc(i - 290, 200, 200, 1200, 270, 90);
    
  }
  for(let i = 0; i < width; i+= 10){

    // circle(400,200, i);
    arc(200, i - 290, 1200, 200, 0, 180);
    
  }
  for(let i = 0; i < width; i+= 10){

    // circle(400,200, i);
    arc(200, i + 300, 1200, 200, 180, 0);
    
  }
  
}