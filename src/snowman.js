/*
  `readline-sync` is a library that allows you to access user input from the command line. The library is assigned to the variable `readline`. It is used in the `run()` function below.
*/
const readline = require("readline-sync");
/*
  The `dictionary` variable will have an array of words that can be used for your game. It is used in the `getRandomWord()` function.
*/
const dictionary = require("./dictionary");


// let playerGuess = "";
// let correctLettersGuessed = [];
// let wrongLettersGuessed = [];
// let allLettersGuessed = [];
// let maxNumberOfTurns = 0;

/*

function hasLetterGuessed(guess){
  return secretWord.includes(guess);
}

function addCorrectLettersToList(guess){
  correctLettersGuessed.push(guess);
  return correctLettersGuessed;
}

Remaining Incorrect Guesses: 7
Letters Guessed: None
Word: _ _ _ _ _ _



  setting up game state
  What data do we need to access or update?
    - secret word
    - correct guesses
    - wrong guesses
    - max num of wrong guesses

    What do we do with that data?
    - put a random secret word into state
    - check if a guess is correct
    - add a correct guess to the list
    - check if the game is won
    = check if the player lost (reached max number of turns)

    Write Helper Functions
    1. one that checks if the Player's guess is correct 
    function hasLetterGuessed (guess){
      return secretWord.includes(guess);
    }
    2. adds correct guess to list of all guesses plus secret word.
    function addRightGuessToList (guess){
      rightLettersGuessed.push(guess);
      return rightLettersGuessed;
    }

*/
// function hasLetterGuessed(guess){
//   return secretWord.includes(guess);
// }
// hasLetterGuessed(userInput);



function getRandomWord() {
  const index = Math.floor(Math.random() * dictionary.length);
  return dictionary[index];
}



function run() {
  // This line of code gets a random word. 
  // const word = getRandomWord();

  let word = "Happy";
  let secretWord = "";
//Use a while loop to ask the player to guess a letter and to keep track of player turns.
  let numOfTurnsLeft = 6;
  while(numOfTurnsLeft > 0){
    const userInput = readline.question("Guess a letter: ");
    console.log("THE USER INPUTTED:", userInput);
  
    numOfTurnsLeft--;
    console.log(`Remaining Incorrect Guesses: ${numOfTurnsLeft}
      Letters Guessed: None
      Word: ${secretWord}`);
  }




   // This accumulator pattern code converts the secret word to underscores and puts a space in between each letter.

  for(let i = 0;i < word.length;i++){
    if(word[i] === userInput){

      secretWord += userInput;
    } else {
      secretWord += "_";
    }
    
    
    if(i !== word.length - 1){
      secretWord += " ";
    }
  }




  
  


   
  


}

run();
