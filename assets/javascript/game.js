var computerChoices = 
 ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var userGuess = [];


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var changeguessesleft = function () {
    document.getElementById("gl").innerHTML = "Guesses left:" + guessesLeft;

    var guessLetter = function () {
        this.guessLetter = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
    }
    var reset = function () {
        maxGuesses = 9;
        guessesLeft = 9;
        userGuess= [];
        guessLetter();

    changeguessesleft();

    };

    guessLetter();
    
    changeguessesleft();

document.onkeyup = function(event) {
    guessesLeft--;
    

    if (guessesLeft > 0){
        if (userGuess == guessLetter){
            wins++;
            document.getElementById("w").innerHTML = "Wins: " + wins;
            alert("You Guessed Right");
            reset();
        }
    }else if(guessesLeft == 0){
        
        losses++;
        document.getElementById('#l').innerHTML = "Losses: " + losses;
        alert("You Guessed Wrong");
        
        reset();
    }
};
}
