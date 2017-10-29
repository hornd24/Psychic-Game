var computerChoices = 
 ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var userGuesses = [];


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess)
var changeguessesleft = function () {
    document.getElementById("gl").innerHTML = "Guesses left: " + guessesLeft;
}
var displayUserGuesses = function() {
    document.getElementById("ug").innerHTML = "User Guesses:" + userGuesses;
}
   
    
    var reset = function () {
        maxGuesses = 9;
        guessesLeft = 9;
        userGuesses = []
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess)
    changeguessesleft();
    displayUserGuesses();
    };

  
    
    changeguessesleft();

document.onkeyup = function(event) {
    guessesLeft--;
    changeguessesleft();
    userGuess = event.key;
    userGuesses.push(event.key);
    displayUserGuesses();
        
    if (guessesLeft > 0){
        if (userGuess == computerGuess){
            wins++;
            document.getElementById("w").innerHTML = "Wins: " + wins;
            alert("You Guessed Right");
            reset();
        }
    }else if(guessesLeft == 0){
        
        losses++;
        document.getElementById('l').innerHTML = "Losses: " + losses;
        alert("You Guessed Wrong");
        
        reset();
    }
};

