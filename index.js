console.log("Welcome to Rock Paper Scissors console game!");
console.log("Type playGame() to get started.\n\n");

function playGame() {
    console.log("\n\n=== Game started! ===\n\n");
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("You: " + humanScore + " | Computer: " + computerScore);
        console.log("");
    }

    console.log("You: " + humanScore + " | Computer: " + computerScore);
    if(humanScore > computerScore)
        console.log("You win the game! Boo to the randomness of the computer!");
    else if(humanScore < computerScore)
        console.log("You lose the game... The Math.random() method wins...")

    function playRound(humanChoice, computerChoice) {
        //Ties
        if(humanChoice === "rock" && computerChoice === "rock")
            console.log("It\'s a tie! None of the players get a point.");
        else if(humanChoice === "paper" && computerChoice === "paper")
            console.log("It\'s a tie! None of the players get a point.");
        else if(humanChoice === "scissors" && computerChoice === "scissors")
            console.log("It\'s a tie! None of the players get a point.");
    
        //Non-ties
        if(humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            console.log("You lose! Paper beats Rock...");
        }
        else if(humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            console.log("You win! Rock beats Scissors...");
        }
        else if(humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            console.log("You win! Paper beats Rock...");
        }
        else if(humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            console.log("You lose! Scissors beats Paper...");
        }
        else if(humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            console.log("You lose! Rock beats Scissors...");
        }
        else if(humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            console.log("You win! Scissors beats Paper.");
        } 
    }
}

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3)
    if(randNum==0)
        return "rock";
    else if(randNum==1)
        return "paper";
    else if(randNum==2)
        return "scissors";
}

function getHumanChoice() {
    let humanInput = prompt("Rock, paper or scissors?");
    if(humanInput.toLowerCase() === "rock")
        return "rock";
    else if(humanInput.toLowerCase() === "paper")
        return "paper";
    else if(humanInput.toLowerCase() === "scissors")
        return "scissors";
}