

function getComputerChoice(){
    let ran = Math.random();

    if(ran < 0.33){
        return 'rock';
    } else if(ran < 0.66){
        return 'papaer';
    } else {
        return 'scissors';
    }
}

