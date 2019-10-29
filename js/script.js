//GLOBAL VARIABLES
/* global $ */
let userInput = "nothing";
let computerChoice = "nothing";
let randomNumber = 0;
// DOCUMENT READY FUNCTION BELOW
$("button").click(function() {
    buttoks = $("#input").val()
    $(" #userChoice").text(buttoks)
    randomNumber = Math.random()
    if (randomNumber < .33){
        computerChoice = "Paper";
    }else if (randomNumber <.66){}
        computerChoice = "Rock";
    }
    else (randomNumber <.99){
        computerChoice = "Scissors";
    }

});


