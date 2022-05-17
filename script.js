
function computerPlay(){            // Computer turn to choose either rock, paper, scissors.

    let selection;
    let randNum = Math.random();    // Generating a random number between 0 and 1. The result divided 
                                    // on 3 sections will define the computer selection. 
    //console.log(randNum);
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
/*
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
*/

//let computerSelection = computerPlay(); // Storing each selection for both the computer and the player.
//let playerSelection = playerPlay();


function playRound(playerSelection){
// un if con varias condiciones 
    let a = computerPlay();
    let b = playerSelection;
    //console.log(a);
    //console.log(b);
    let winner;
    // All the conditions where the computer wins
if (b != "Invalid input"){
    if(a == "Rock" && b == "Scissors" || a == "Paper" && b == "Rock" || a == "Scissors" && b == "Paper"){
        //console.log("Computer wins, GGEZ");
        winner = "Computer";
    }
    else if(a==b){                      // Checks if it was a tie
        //console.log("TIE");
        winner = "Tie";
    }
    else {                              // If the computer didn't win and it wasn't a tie, player wins.
        //console.log("Player wins");
        winner = "Player";
    }
        return winner;
    }
else(playRound());
    }        

/*
function fiveRounds(){                      // Creates a loop for 5 games, Best of 5 Rules.
    let roundWinner;
    let computerWonRounds=0;            
    let playerWonRounds=0;
    for(let i = 1; i <= 5; i++) {

        console.log("Round: "+i);
        roundWinner = playRound();          // Calls for a round to be played
        if(roundWinner == "Computer"){
            computerWonRounds++;            // If the computer won that round, a win is added to its score
        }
        else if(roundWinner == "Player"){   // If the player won that round, a win is added to its score.
            playerWonRounds++;
        }
        else{};
    };

    console.log(`Player won ${playerWonRounds} times.`)         // Display both scores at the end
    console.log(`Computer won ${computerWonRounds} times.`)
    if(computerWonRounds>playerWonRounds){                      // Check who has 
        console.log("Computer wins!")
    }
    else if(computerWonRounds==playerWonRounds){
        console.log("DAMN, TIED AFTER 5 ROUNDS")
    }
    else {
        console.log("Player wins!")
    }
   
}
*/
/*
let letsPlay = prompt("Do you want to play 5 rounds of Rock, Paper, Scissors against the almighty random Computer? Y/N")
if(letsPlay == "Y"){
    fiveRounds();
}
else {
    alert("Goodbye");
}
*/
// console.log("Result: " + playRound());

let roundWinner = '';
let computerWonRounds = 0;            
let playerWonRounds = 0;
let roundNumber = 1;
let gameOver = false;

function resetGameValues(){
    roundWinner='';
    computerWonRounds = 0;
    playerWonRounds = 0;
    roundNumber = 1;
    gameOver = false;
    roundResult.textContent="Waiting for game to start...";
    results.textContent = `Waiting for game to start...`;
    roundStatus.textContent = "Waiting for game to start...";
}

function incrementPoints(){
    if(roundWinner == "Computer"){
        computerWonRounds++;            // If the computer won that round, a win is added to its score
        roundResult.textContent="Round result: Computer wins";
    }
    else if(roundWinner == "Player"){   // If the player won that round, a win is added to its score.
        playerWonRounds++;
        roundResult.textContent="Round result: Player wins";
    }
    else{roundResult.textContent="Round result: Tie";};
    results.textContent = `Player points: ${playerWonRounds}. Computer points: ${computerWonRounds}.`;
};

function checkForFiveRoundsWinner(){
    if(computerWonRounds >=5){
        roundStatus.textContent = "Game Over. Computer Wins";
        gameOver= true;
    }    
    else if( playerWonRounds >= 5){
        roundStatus.textContent = "Game Over. Player Wins";
        gameOver= true;
    }
    else{roundStatus.textContent = `Round ${roundNumber}`;}
    console.log(gameOver);
};

function updateEverything(){        // Updates everything after each button press
    if(!gameOver){incrementPoints();              // Increments points to the winner
    checkForFiveRoundsWinner();     // Checks if either one has won 5 times already
    roundNumber++;}                  // Just to display current round number (tied...
};                                  // ...games makes it look like it isn't working)

const rockbtn = document.querySelector('.rock');            // Rock button
rockbtn.addEventListener('click', ()=>{
    roundWinner = playRound('Rock');
    updateEverything();
});

const paperbtn = document.querySelector('.paper');          // Paper button
paperbtn.addEventListener('click', ()=>{
    roundWinner = playRound('Paper');
    updateEverything();
});

const scissorsbtn = document.querySelector('.scissors');    // Scissors button
scissorsbtn.addEventListener('click', ()=>{
    roundWinner = playRound('Scissors');
    updateEverything();            
});



const results = document.querySelector('.results');
const roundStatus = document.querySelector('.roundStatus');
const roundResult = document.querySelector('.roundResult');
const playAgain = document.querySelector('.playAgain');

playAgain.addEventListener('click', ()=>{
    let reset = resetGameValues();
});
