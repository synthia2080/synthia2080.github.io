let wordList = [`Love`, `CyberSpace`, `DarkWeb`, `Enlightenment`, `Soul`, `Humanity`, 'Programmed', 'Augmented', 'Programmed\nSoul', 'Artificial\nIntelligence'];
let displayWord, word0;
let x;
let displacement;
let y = 555;

//Converts randomized/chosen text to binary
function textToBinary(text){
  
  let fullBinary = ``;
  let deciCode = [];
  
  //converts each character in text to decimal and adds it to deciCode as elem in list
  for(let i = 0; i < text.length; i++){
    deciCode.push(text.charCodeAt(i));
  }
  
  //Converts each elem in deciCode to string and adds it to fullBinary
  for(let i = 0; i < deciCode.length; i++){
    fullBinary = fullBinary + deciCode[i].toString(2);
  }
  
  return fullBinary;
}



function setup() {
  createCanvas(555, 555);
  frameRate(5);
  displacement = random(3,7);
  x = random(377, width - 55);
  
  //Choosing 2 revelas easter egg yet to be created ----------------CREATE EASTER EGG
  let choice0 = prompt('Choose 1 for random word\nChoose 3 for personal choice');
  
  //Handles entries for choice0
  if(choice0 == 1){
    word0 = random(wordList);
  }
  else if(choice0 == 3){
    word0 = prompt('Please enter your desire');
  }
  else{
    choice0 = prompt('INVALID ENTRY\nChoose 1 for random word\nChoose 3 for personal choice')
  }
  
  displayWord = textToBinary(word0);
  
}

//Creates the rainfall effect using noise
function rainFall(){
  //Code copied and altered from the noise reference in p5js
  let noiseScale = 0.1;
  
  //Code borrowed an altered from p5js reference library
  for (let x=0; x < width; x++) {
    let noiseVal = noise(noiseScale*random(0,5),  random(0, 5)*noiseScale);
    
    stroke(0);
    noiseSeed(7);
    //Creates lines from noiseVal
    line(x, frameCount*noiseVal*5, x, height*noiseVal*55);
    
    //ends loop for noise after time
    if(frameCount >= height*3){
      break;
    }
  }
  
  
}


//Primary binary cirucuit patter
function binaryCircuit(x){
  fill(255);
  textSize(21);
  displacement = random(5,10);
  let y = 0;
  
  //Displays the text top down
  for(let i = 0; i < displayWord.length / 2; i++){
    //Creates diagonals at random indexes that change each frame
    if(i >= displacement && i <= displacement + 3){
      
        text(displayWord[i], x, y);
        x = x + 10;
        y = y + 22;
        
    }
    else if (i >= displacement + 11 && i <= displacement + 13){
        text(displayWord[i], x, y);
        x = x + 10;
        y = y + 22;
      }
    //Handles non-diagonal text
    else{
      text(displayWord[i], x, y)
      y = y + 22;
    }
    
  }
  
  
}

//alternative binary circuit pattern
function binaryCircuitAlt(x){
  fill(255);
  textSize(22);
  displacement = random(5,10);
  let y = 0;
  
  
  //Displays the text top down
  for(let i = 0; i < displayWord.length / 2; i++){
    //Creates diagonals at random indexes that change each frame
    if(i >= displacement + 5 && i <= displacement + 10){
      
        text(displayWord[i], x, y);
        x = x - 10;
        y = y + 22;
        
    }
    else if (i >= displacement + 13 && i <= displacement + 15){
        text(displayWord[i], x, y);
        x = x + 10;
        y = y + 22;
      }
    //Handles non-diagonal text
    else{
    
      text(displayWord[i], x, y)
      y = y + 22;
    }
    
  }
  
  
}

//Other alternative circuit pattern
function binaryCircuitAlt1(x){
  fill(255);
  textSize(22);
  displacement = random(5,10);
  let y = 0;
  
  
  
  //Displays the text top down
  for(let i = 0; i < displayWord.length / 2; i++){
    
    //Creates diagonals at random indexes that change each frame
    if(i >= displacement - 3 && i <= displacement + 5){
      
        text(displayWord[i], x, y);
        x = x - 10;
        y = y + 22;
        
    }
    else if(i >= displacement +11 && i <= displacement + 15){
      
        text(displayWord[i], x, y);
        x = x - 10;
        y = y + 22;
        
    }
    //Handles non-diagonal text
    else{
    
    text(displayWord[i], x, y)
    y = y + 22;
    }
    
  }
  
  
}

function draw() {
  background(0);
  stroke(255);
  
  //lines for the circuitboard pattern in middle
  line(width/2, height, width/2, 111);
  line(width/2, 111, width/2 + 77 , 77);
  line(width/2 + 77, 77, width/2 + 77, 0);
  line(width/2, 111, width/2 - 77, 77);
  line(width/2 - 77, 77, width/2 - 77, 0);
  line(width/2, 121, width/2 - 77, 87);
  line(width/2, 121, width/2 + 77, 87);
  
  line(width/2, 223, width/2 - 33, 277);
  line(width/2 - 33, 277, width/2 - 33, 333);
  line(width/2 - 33, 311, width/2 - 13, 337);
  line(width/2 - 13, 337, width/2 - 13, 447);
  
  line(width/2, 177, width/2 + 17, 211);
  line(width/2 + 17, 211, width/2 + 17, 333);
  line(width/2 + 17, 277, width/2 + 31, 311);
  line(width/2 + 31, 311, width/2 + 31, 377);
  
  line(width/2, 433, width/2 + 13, 457);
  line(width/2 + 13, 457, width/2 + 13, 511);
  
  //displays the chosen/randomized text
  textSize(19);
  textAlign(CENTER);
  textFont('Monaco');
  text(word0, width/2, 51);
  
  //Displays the binary
  binaryCircuit(x);
  binaryCircuit(x - 333);
  binaryCircuitAlt(x);
  binaryCircuitAlt(x-333);
  binaryCircuitAlt1(x);
  binaryCircuitAlt1(x-333);
  binaryCircuitAlt1(x-311);

  //Effect for the matrix rainfall
  rainFall();

  
  
  

}