let playerScore = 0;
let computerScore = 0;

const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');

function getComputerChoice() {
  const choices = ['piedra', 'papel', 'tijeras'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  let result = '';

  if (playerSelection === computerSelection) {
    result = `Empate: ambos eligieron ${playerSelection}.`;
  } else if (
    (playerSelection === 'piedra' && computerSelection === 'tijeras') ||
    (playerSelection === 'papel' && computerSelection === 'piedra') ||
    (playerSelection === 'tijeras' && computerSelection === 'papel')
  ) {
    playerScore++;
    result = `Ganaste esta ronda: ${playerSelection} vence a ${computerSelection}.`;
  } else {
    computerScore++;
    result = `Perdiste esta ronda: ${computerSelection} vence a ${playerSelection}.`;
  }

  resultDiv.textContent = result;
  scoreDiv.textContent = `Jugador: ${playerScore} - Computadora: ${computerScore}`;

  checkWinner();
}

function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      resultDiv.textContent = '🎉 ¡Ganaste el juego completo!';
    } else {
      resultDiv.textContent = '💀 Perdiste el juego completo.';
    }

    // Desactivar botones
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
  }
}

// Agregar eventos a los botones
document.getElementById('rock').addEventListener('click', () => playRound('piedra'));
document.getElementById('paper').addEventListener('click', () => playRound('papel'));
document.getElementById('scissors').addEventListener('click', () => playRound('tijeras'));