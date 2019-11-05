//GLOBAL VARIABLES
/* global $ */
let userInput = "nothing";
let computerChoice = "nothing";
let randomNumber = 0;
// DOCUMENT READY FUNCTION BELOW
$("button").click(function() {
    buttoks = $("#input").val()
    $("#userChoice").text(buttoks);
    randomNumber = Math.random()
    if (randomNumber < .33){
        computerChoice = "Paper";
    }
    else if (randomNumber <.66){
        computerChoice = "Rock";
    }
    else if (randomNumber <.99){
        computerChoice = "Scissors";
    }
    /**
    display computer choice to screen
    Display user choice to screen
     */

//     console.log("success")
// if (computerChoice === userInput){
//     console.log("tie!");
// } else if(computerChoice === paper && userInput === rock){
//     console.log("computerChoice wins");
// }
});


