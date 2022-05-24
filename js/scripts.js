// Rock Paper Scissors

console.log("Time to play: Rock, Paper and Scissors!");
console.log("FIVE ROUNDS... begin!");
console.log("");
game();

function computerPlay() {
    let rando = Math.floor(Math.random() * 3) + 1;
    if(rando == 1) {
        return('Rock')
    }
    else if(rando == 2) {
        return('Paper')
    }
    else {
        return('Scissors')
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    /* TIE = 1
        WIN = 2
        LOSE = 3 */

    if(playerSelection == 'ROCK') {
        if(computerSelection == playerSelection) {
            console.log('It\'s a tie! Rock bumps against the other Rock.')
            return 1;
        }
        else if(computerSelection == 'PAPER') {
            console.log('You lose! Paper beats Rock.')
            return 3;
        }
        else {
            console.log('You win! Rock beats Scissors.')
            return 2;
        }
    }
    else if(playerSelection == 'PAPER') {
        if(computerSelection == playerSelection) {
            console.log('It\'s a tie! Paper floats against the other Paper.')
            return 1;
        }
        else if(computerSelection == 'SCISSORS') {
            console.log('You lose! Scissors beats Paper.')
            return 3;
        }
        else {
            console.log('You win! Paper beats Rock.')
            return 2;
        }
    }
    else { //SCISSORS
        if(computerSelection == playerSelection) {
            console.log('It\'s a tie! Scissors clashes against the other Scissors.')
            return 1;
        }
        else if(computerSelection == 'ROCK') {
            console.log('You lose! Rock beats Scissors.')
            return 3;
        }
        else {
            console.log('You win! Scissors beats Paper.')
            return 2;
        }
    }
}

function game() {
    let playerScore = 0, computerScore = 0;
    let computerSelection;
    let result;
    for(let i = 1; i <= 5; i++) {
        let playerSelection = prompt('Round ' + i + '! Type \'Rock\', \'Paper\', or \'Scissors\'!');
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        if(result == 1) {
            console.log('Player '+playerScore+' : '+computerScore+' Computer');
            i -= 1;
        }
        else if(result == 2) {
            playerScore++;
            console.log('Player '+playerScore+' : '+computerScore+' Computer');
        }
        else if(result == 3) {
            computerScore++;
            console.log('Player '+playerScore+' : '+computerScore+' Computer');
        }
        console.log("");
    }
    if(playerScore == 3 || playerScore > computerScore) {
        console.log('YOU WIN THE GAME! Congrats Player!')
    }
    else if(computerScore == 3 || playerScore < computerScore) {
        console.log('You lose... salutations to the robot.')
    }
}