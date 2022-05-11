function computerPlay(){            // Computer turn to choose either rock, paper, scissors.

    let selection;
    let randNum = Math.random();    // Generating a random number between 0 and 1. The result divided 
                                    // on 3 sections will define the computer selection. 
    console.log(randNum);
    if(randNum>=0.667){
        selection = "Scissors";
      //  console.log("Scissors");
    }
    else if(randNum>=0.334){
        selection = "Paper";
       // console.log("Paper");
    }
    else {
        selection = "Rock";
        //console.log("Rock");
    }
    return selection;
};

function playerPlay(){              
    let selection = prompt("Choose your weapon: Rock, Paper, or Scissor. Type your answer below: ");
    let selectionLowercase = selection.toLowerCase();  
    switch(selectionLowercase){      // Lets first check if the user input is valid and define a variable 
        case 'rock':                 // on each case.
            selection = "Rock";
            break;
        case 'paper':
            selection = "Paper";
            break;
        case 'scissors':
            selection = "Scissors";
            break;
        default:                     // If the input isn't one of the 3 options and we display an error message.
            console.log(`${selection} is not a valid input. Gitgud scrub.`)
            selection = "Invalid input"
    }
    return selection;
};

let computerSelection = computerPlay(); // Storing each selection for both the computer and the player.
let playerSelection = playerPlay();

console.log(computerSelection);
console.log(playerSelection);

function playRound(playerSelection, computerSelection){
// un if con varias condiciones 
    let a = computerSelection;
    let b = playerSelection;
    // Todas las condiciones donde la computadora gana
    if(a == "Rock" && b == "Scissors" || a == "Paper" && b == "Rock" || a == "Scissors" && b == "Paper"){
        console.log("Computer wins, GGEZ");
    }
    else if(a==b){
        console.log("TIE");
    }
    else {
        console.log("Player wins");
    }
        
    }        

console.log(playRound(playerSelection, computerSelection));