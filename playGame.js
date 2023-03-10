var playerScore = 0;
var computerScore = 0;
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function getComputerChoice() {

    //Randomly return either rock, paper, or scissors
    //The function will randomly choose a number (1,2,or 3). Based on that it will return the corresponding value; that is the computer's choice

    let randomNum = getRandomIntInclusive(1,3)

    if(randomNum == 1)
    {
        return "rock";
    }

    else if (randomNum == 2)
    {
        return "paper";
    }

    else if (randomNum == 3)
    {
        return "scissors";
    }

}

function playRound(playerSelection) {

    //Player parameter should be cleaned to be case insensitive
    //Compare the two parameters to determine the winner of the game
    //Return a string with the winner of the game
    let computerSelection = getComputerChoice();
    playerSelection = playerSelection.target.id;
    playerSelection = playerSelection.toString();

    if (playerSelection == computerSelection)
    {
        updateScore(0);//Draw
    }

    else if ( (playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "scissors" && computerSelection == "rock")  || (playerSelection == "paper" && computerSelection == "scissors"))
    {
        updateScore(-1);//Player loses.
    }

    else
    {
        updateScore(1);//Player wins
    }

}

function updateScore(result) {

    let resultScreen = document.getElementById('result-text');
    
    if(result == 0)
    {
        resultScreen.textContent = "This round was a draw. Nobody got a point";
    }

    else if (result == -1)
    {
        computerScore += 1;
        resultScreen.textContent = "The computer won this round";
    }

    else if (result == 1)
    {
        playerScore += 1;
        resultScreen.textContent = "Congrats, you got a point";
    }

    player.textContent = playerScore;
    computer.textContent = computerScore;

    isGameOver();


}

function isGameOver(){
    if(playerScore == 5)
    {
        winnerText.textContent = "Congrats!! You win the game."
        modal.style.display = "block"
    }
    else if (computerScore == 5)
    {
        winnerText.textContent = "You lost"
        modal.style.display = "block"
    }
}


const buttons = document.querySelectorAll('button#rock, button#paper, button#scissors');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const modalBtn = document.getElementById("modal-btn");
const modal = document.querySelector(".modal");
const winnerText = document.querySelector("#winner");
const closeBtn = document.querySelector(".close-btn");
const resestBtn = document.querySelector("#reset");
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}
resestBtn.onclick = () => {
    location.reload();
}

buttons.forEach( (button) => {
    button.addEventListener('click', playRound);
});