const decisions = [
    'rock',
    'paper',
    'scissors'
]

function getComputerChoice() {
    let ran = Math.random();

    if (ran < 0.33) {
        return decisions[0];
    } else if (ran < 0.66) {
        return decisions[1];
    } else {
        return decisions[2];
    }
}

function getHumanChoice() {
    let userPrompt = prompt('Chose rock, papaer or scissors', decisions[0]).toLowerCase();

    if (!decisions.includes(userPrompt)) {
        alert('Use rock, paper or scissors as answer.');
        restartGame();
        return;
    }

    return userPrompt;
}

function playRound(obj) {

    if (obj.gameCounter >= 5) {
        console.log('Final Score: You:' + obj.humanScore + ' - CPU:' + obj.computerScore);
        return;
    }

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    //console.log('humanChoice',humanChoice);
    //console.log('computerChoice',computerChoice);

    if (humanChoice == computerChoice) {
        obj.gameCounter++;
        console.log('Tie');
        playRound(obj);
        return;
    }

    if (humanChoice == decisions[0] && computerChoice != decisions[1]) {
        //console.log('CPU lose',);
        obj.humanScore++;
        console.log('You win! ' + humanChoice + ' beats ' + computerChoice + ' Score: You:' + obj.humanScore + ' - CPU:' + obj.computerScore);
    } else if (humanChoice == decisions[1] && computerChoice != decisions[2]) {
        //console.log('CPU lose',);
        obj.humanScore++;
        console.log('You win! ' + humanChoice + ' beats ' + computerChoice + ' Score: You:' + obj.humanScore + ' - CPU:' + obj.computerScore);
    } else if (humanChoice == decisions[2] && computerChoice != decisions[0]) {
        //console.log('CPU lose',);
        obj.humanScore++;
        console.log('You win! ' + humanChoice + ' beats ' + computerChoice + ' Score: You:' + obj.humanScore + ' - CPU:' + obj.computerScore);
    } else {
        //console.log('Human lose',);
        obj.computerScore++;
        console.log('You lose! ' + computerChoice + ' beats ' + humanChoice + ' Score: You:' + obj.humanScore + ' - CPU:' + obj.computerScore);
    }

    obj.gameCounter++;
    playRound(obj);
}

function playGame() {
    let scores = {
        humanScore: 0,
        computerScore: 0,
        gameCounter: 0
    };

    playRound(scores);

}

playGame();