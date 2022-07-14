/*
    rock > scissors
    paper > rock
    scissors > paper         
*/

//Computer - random 'rock', 'paper', or 'scissors' (RPS)
function computerPlay() {
    let randomSelection = Math.floor(Math.random() * 3)

    switch(randomSelection) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

// Human
function humanPlay() {
    let humanSelection = prompt("Type your weapon (rock, paper, scissors)");
    
    return humanSelection.toLowerCase();
}

//Single round of RPS      
function playRound(playerSelection, computerSelection) { 

    switch (true) {
        case (playerSelection === "rock") && (computerSelection === "scissors"):
        case (playerSelection === "paper") && (computerSelection === "rock"):
        case (playerSelection === "scissors") && (computerSelection === "paper"):
            return "human";
            break;
        case (computerSelection === "rock") && (playerSelection === "scissors"):
        case (computerSelection === "paper") && (playerSelection === "rock"):
        case (computerSelection === "scissors") && (playerSelection === "paper"):
            return "computer";
            break;
        default:
            return "tie"  ;              
    }
}         

//Five rounds
function game() {

    let humanPoints = 
        computerPoints = 
        tie = 0;

    for (let i = 1; i <= 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = humanPlay();
        let roundWinner = playRound(playerSelection, computerSelection);
     
        (roundWinner === "human") ? humanPoints++ : 
        (roundWinner === "computer") ? computerPoints++ : 
        tie++;
                        
        console.log(`Round ${i} -  Human: ${playerSelection} | Computer: ${computerSelection} | Winner: ${roundWinner}`);            
    }
    console.log(`Final Score - Human: ${humanPoints} | Computer: ${computerPoints} | Tie: ${tie}`);
}   
        