// Snake and Ladder Game in JavaScript

const boardSize = 100; // Size of the game board
const diceFaces = 6; // Number of faces on the dice

// Define snakes and ladders
const snakesAndLadders = {
  16: 6,
  47: 26,
  49: 11,
  56: 53,
  62: 19,
  64: 60,
  87: 24,
  93: 73,
  95: 75,
  98: 78
};

// Initialize player positions
let player1Position = 1;
let player2Position = 1;

function rollDice() {
  return Math.floor(Math.random() * diceFaces) + 1;
}

function movePlayer(player, diceRoll) {
  player += diceRoll;

  if (snakesAndLadders[player]) {
    const newPosition = snakesAndLadders[player];
    console.log(`Player ${player} encountered a snake or ladder!`);
    player = newPosition;
  }

  return player;
}

function playGame() {
  while (player1Position < boardSize && player2Position < boardSize) {
    const player1Roll = rollDice();
    const player2Roll = rollDice();

    player1Position = movePlayer(player1Position, player1Roll);
    player2Position = movePlayer(player2Position, player2Roll);

    console.log(`Player 1 rolled a ${player1Roll}. Player 2 rolled a ${player2Roll}.`);
    console.log(`Player 1 is at position ${player1Position}. Player 2 is at position ${player2Position}.`);
  }

  if (player1Position >= boardSize) {
    console.log("Player 1 wins!");
  } else {
    console.log("Player 2 wins!");
  }
}

playGame();
