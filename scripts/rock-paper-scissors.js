//Computer - random 'rock', 'paper', or 'scissors' (RPS)
function computerPlay() {
    let randomSelection = Math.floor(Math.random() * 3)

    switch(randomSelection) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Human
function humanPlay() {
    let humanSelection = prompt("Type your weapon (rock, paper, scissors)");
    
    if (!humanSelection) {
        return "invalid";        
    } else {
        return humanSelection.toLocaleLowerCase();
    }     
}

//Single round of RPS      
function playRound(playerSelection, computerSelection) { 
    switch (true) {
        case (playerSelection === "rock") && (computerSelection === "scissors"):
        case (playerSelection === "paper") && (computerSelection === "rock"):
        case (playerSelection === "scissors") && (computerSelection === "paper"):
            return "human";
        case (computerSelection === "rock") && (playerSelection === "scissors"):
        case (computerSelection === "paper") && (playerSelection === "rock"):
        case (computerSelection === "scissors") && (playerSelection === "paper"):
            return "computer"
        case (playerSelection === computerSelection):
            return "tie";
        default:
            return "invalid";              
    }
}

//Five rounds
function game() {
    let humanPoints = 
        computerPoints = 
        tie = 0;
    
    for (let i=1; ; i++) {
        const playerSelection = humanPlay();
        const computerSelection = computerPlay();
        let roundWinner = playRound(playerSelection, computerSelection);

        switch(roundWinner) {
            case "human":
                humanPoints++;
                console.log(`Round ${i}: ${playerSelection} beats ${computerSelection} | You win!`); break;
            case "computer":
                computerPoints++;
                console.log(`Round ${i}: ${computerSelection} beats ${playerSelection} | You lose!`);
                break;
            case "tie":
                tie++;
                console.log(`Round ${i}: TIE ${computerSelection} = ${playerSelection}`);
                break;
            case "invalid":                
                console.log(`Round ${i}: Invalid data entered. Invalid round.`)
        }
                
        if ((humanPoints === 5) | (computerPoints === 5)) {break;}
    }
    console.log(`Final Score - Human: ${humanPoints} | Computer: ${computerPoints} | Tie: ${tie}`);    
}