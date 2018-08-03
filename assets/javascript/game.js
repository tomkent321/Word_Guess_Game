
document.getElementById("output").innerHTML = " ";
document.getElementById("guessed").innerHTML = " ";


// variables

var userInputArr = [];
var availLetters = "abcdefghijklmnopqrstuvwxyz";
var wordList = [
    "planet",
    "orbit",
    "rocket",
    "astronaut",
    "telescope",
    "star",
    "galaxy",
    "nebulae",
    "nova",
    "cosmonaut",
    "eclipse",
    "sattelite",
    "gravity"
]

var userProgress = [];
var word;
var wordIndexNum;
var wordArr = [];
var userInput;
var guessesLeft;
var wins = 0;
var losses = 0;
var foundLetter = false;

// functions

function guess() {
document.onkeyup = function(event) {

// Determines which key was pressed.
userInput = event.key;
userInput = userInput.toLowerCase();

// Make sure it is a letter and has not been used
    if (availLetters.indexOf(userInput) !== -1) {

    if (userInputArr.indexOf(userInput) !== -1) {
        alert("You have already guessed that letter.")
    } else {

    userInputArr.push(userInput);
    document.getElementById("output").innerHTML = userInput;
    document.getElementById("guessed").innerHTML = userInputArr.join(" ");

    }
    }

    evalUserInput();
}

}

function generateWord() {
    word = wordList[Math.floor(Math.random() * wordList.length)];


    //turn it into an array

    for(var i = 0; i < word.length; i++) {
        wordArr.push(word.charAt(i));
}
}

function initializeGame() {
    for(var i = 0; i < word.length; ++i){
        userProgress.push("_");
    }
     
    guessesLeft =  word.length + 6;
     
    document.getElementById("remains").innerHTML = guessesLeft;

    document.getElementById("progress").innerHTML = userProgress.join(" ");
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    
}

function evalUserInput() {

        foundLetter = false;

    for (var i = 0; i < wordArr.length; ++i) {

        if (userInput == wordArr[i]) {
            userProgress[i] = userInput;
            foundLetter = true;

        }    
    }   
        if (!foundLetter) {
        guessesLeft = guessesLeft -1;
        
       } 

    document.getElementById("remains").innerHTML = guessesLeft;
    document.getElementById("progress").innerHTML = userProgress.join(" ");
    
    keepScore();
}



function keepScore() {

    if(guessesLeft <1){
        alert("Sorry, you lose!");
        // or call game over
        losses++;
        confirm("Play again?");
    }

    

            var checkOne = wordArr.toString();
            var checkTwo = userProgress.toString();
        
        if (checkOne == checkTwo) {
            alert("You won!");
            wins++; 
        }
        
   

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;



    //see if the number of lives has dropped to 0
    // go to end of game function
        //(increment losses)

    // if not end of game
    // check to see if wordArr matches progressArr
    // if so: go to you win function
        //(increment wins)
        //play again?
    
    // 


}


// call the functions
function startGame() {

generateWord();
initializeGame();
guess();
keepScore();
// evalUserInput();
};
 startGame();