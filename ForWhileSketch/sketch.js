function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  var z = 0;
  var c = 0;
  
  while (z <= width){
      fill(0);
      square(z , c , 10);
      c += 10;
      z += 10;
  
  }
  
  var z1 = width;
  var c1 = 0;
  while (z1 >= 0){
      fill(0);
      square(z1 , c1 , 10);
      c1 += 10;
      z1 -= 10;
  
  }
  
  var y = 0;
  while(y < height){
    fill(111);
    triangle(200, 0, 100, y, 300, y);
    
    y += 10;
  }
  
  for(var i = 0; i < height; i += 50){
    fill(111);
    triangle(200, 0, 150, i, 250, i);
    
  }
  
  
  
  
  
}