let btnRestart = document.getElementById('btnRestart');
let boxes = Array.from(document.getElementsByClassName('box'));

const X_TEXT = 'X';
const O_TEXT = 'O';
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);
let gameOver = false;
let clickCount = 0;

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked));
}

function boxClicked(e) {
    if(gameOver) return;

    const id = e.target.id;

    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        e.target.classList.add(currentPlayer.toLowerCase());

        if(playerHasWon() !== false){
            document.getElementById('result').innerHTML = `${currentPlayer} HAS WON!`;
            document.getElementById('restart').innerHTML = 'Click "restart" to play again!';
            // alert(`${currentPlayer} has won!`);
            gameOver = true;
            return;
        }
        
        clickCount++;
        if(clickCount == 9) {
            document.getElementById('result').innerHTML = 'GAME OVER'
            document.getElementById('restart').innerHTML = 'Click "restart" to play again!';
        }

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT;
    }
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition;

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c];
        }
    }
    return false;
}

btnRestart.addEventListener('click', restart);

function restart() {
    spaces.fill(null);

    boxes.forEach( box => {
        location.reload();
    })

    currentPlayer = X_TEXT;
    gameOver = false;
}

startGame();