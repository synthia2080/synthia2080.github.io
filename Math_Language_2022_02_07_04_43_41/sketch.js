//This first draft is more of a proof of concept. I will make it more complex/pretty as time goes on!
//Additional changes needing to be made:
// - More diagonals/code being displayed that is based on the length of the word
// - Reveal new text each frame to achieve rain effect **I have no clue how to do this, need to ask Professor



let wordList = [`Love`, `CyberSpace`, `DarkWeb`, `Joy`, `BladeRunner`, `2049`];
let displayWord, word0;

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
  frameRate(1);
  //Chooses random word
  
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




function draw() {
  background(0);
  fill(255);
  textSize(22);
  
  let x = 50;
  let y = 0;
  let displacement = random(5,10)
  
  
  //Displays the text top down
  for(let i = 0; i < displayWord.length / 2; i++){
    //Creates diagonals at random indexes that change each frame
    if(i >= displacement && i <= displacement + 7){
      
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