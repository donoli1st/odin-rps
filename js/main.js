const decisions = [
    'rock',
    'papaer',
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

    
}

function restartGame (){
    window.location.reload();
}

getHumanChoice();