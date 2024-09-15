const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let board = Array(9).fill(null);

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]              
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    return board.every(cell => cell) ? 'Empate' : null;
}

function handleClick(event) {
    const index = event.target.dataset.index;

    if (board[index] || checkWinner()) return;

    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;

    const winner = checkWinner();
    if (winner) {
        status.textContent = winner === 'Empate' ? 'Empate!' : `Jogador ${winner} venceu!`;
        cells.forEach(cell => cell.removeEventListener('click', handleClick)); 
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        status.textContent = `Jogador ${currentPlayer} - É sua vez!`;
    }
}

function resetGame() {
    board.fill(null);
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    status.textContent = `Jogador ${currentPlayer} - É sua vez!`;
    cells.forEach(cell => cell.addEventListener('click', handleClick)); 
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);


