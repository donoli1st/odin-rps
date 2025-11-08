const decisions = [
    'rock',
    'paper',
    'scissors'
]

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let ran = Math.random();

    if(ran < 0.33){
        return decisions[0];
    } else if(ran < 0.66){
        return decisions[1];
    } else {
        return decisions[2];
    }
}

function getHumanChoice(){
    let userPrompt = prompt('Chose rock, papaer or scissors', decisions[0]).toLowerCase();

    if(!decisions.includes(userPrompt)){
        alert('Use rock, paper or scissors as answer.');
        restartGame();
        return;
    }

    return userPrompt;
}

function playRound(humanChoice, computerChoice){
    //console.log('humanChoice',humanChoice);
    //console.log('computerChoice',computerChoice);

    if(humanChoice == computerChoice){
        return;
    }

    if(humanChoice == decisions[0] && computerChoice != decisions[1]){
        //console.log('CPU lose',);
        humanScore++;
    } else if(humanChoice == decisions[1] && computerChoice != decisions[2]){
        //console.log('CPU lose',);
        humanScore++;
    } else if(humanChoice == decisions[2] && computerChoice != decisions[0]){
        //console.log('CPU lose',);
        humanScore++;
    } else {
        //console.log('Human lose',);
        computerScore++;
    }
}

playRound(getHumanChoice(), getComputerChoice())