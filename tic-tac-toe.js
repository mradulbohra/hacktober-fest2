// Tic-Tac-Toe Game in JavaScript

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let currentPlayer = 'X';
const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

function printBoard() {
  console.log(` ${board[0][0]} | ${board[0][1]} | ${board[0][2]}`);
  console.log('---|---|---');
  console.log(` ${board[1][0]} | ${board[1][1]} | ${board[1][2]}`);
  console.log('---|---|---');
  console.log(` ${board[2][0]} | ${board[2][1]} | ${board[2][2]}`);
}

function checkWin() {
  // Check rows, columns, and diagonals for a win
  for (let i = 0; i < 3; i++) {
    if (
      (board[i][0] !== ' ' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) ||
      (board[0][i] !== ' ' && board[0][i] === board[1][i] && board[0][i] === board[2][i])
    ) {
      return true;
    }
  }

  if (
    (board[0][0] !== ' ' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) ||
    (board[0][2] !== ' ' && board[0][2] === board[1][1] && board[0][2] === board[2][0])
  ) {
    return true;
  }

  return false;
}

function checkDraw() {
  // Check if the board is full (draw)
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === ' ') {
        return false;
      }
    }
  }
  return true;
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function makeMove(row, col) {
  if (row >= 0 && row < 3 && col >= 0 && col < 3 && board[row][col] === ' ') {
    board[row][col] = currentPlayer;
    return true;
  }
  return false;
}

function playGame() {
  console.log('Welcome to Tic-Tac-Toe! Players take turns by entering row and column numbers.');
  console.log('Rows and columns are numbered from 0 to 2.');
  console.log('Example: To place your symbol in the top-right corner, enter "0 2".\n');

  printBoard();

  rl.question(`Player ${currentPlayer}, enter your move (row col): `, (input) => {
    const [row, col] = input.split(' ').map(Number);

    if (makeMove(row, col)) {
      if (checkWin()) {
        printBoard();
        console.log(`Player ${currentPlayer} wins!`);
        rl.close();
      } else if (checkDraw()) {
        printBoard();
        console.log('It\'s a draw!');
        rl.close();
      } else {
        switchPlayer();
        printBoard();
        playGame();
      }
    } else {
      console.log('Invalid move. Try again.');
      playGame();
    }
  });
}

playGame();
