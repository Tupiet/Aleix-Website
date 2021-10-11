// This will allow us to collect the ids
let id = (id) => document.getElementById(id)

// When the DOM is ready, declare some vars
document.addEventListener('DOMContentLoaded', () => {
    game = id('game')
    msg = id('msg')
    playerNum = id('playerNum')
})

let selectedColumn

let continuePlaying = true

let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

let turn = 1 // 1 = player 1, 2 = player 2

// When a cell is clicked, this will be executed
function iClicked(id) {
    if (continuePlaying === true) {
        // The selected column in the array is the last number in the id - 1
        selectedColumn = id.substring(1) - 1
        // See if I can play in this column
        seeIfICanPlay(selectedColumn)
    }
}

// This will return the row letter
function getRowLetter(row) {
    switch(row) {
        case 0:
            row = 'a'
            break
        case 1:
            row = 'b'
            break
        case 2:
            row = 'c'
            break
        case 3:
            row = 'd'
            break
        case 4:
            row = 'e'
            break
        case 5:
            row = 'f'
            break
    }
    return row
}

// This will check if I can play in the selected column
function seeIfICanPlay(column) {
    // The for-loop will start counting from the last row
    for (let i = 5; i >= 0; i--) {
        // If the cell is empty, I can play
        if (board[i][column] === 0) {
            // So, in the board array, assign the turn value to the cell
            board[i][column] = turn
            checkWinner() ? sayWinner() : null

            // Get the row letter
            let row = getRowLetter(i)
            
            // Now, get the exact cell and change the background color
            id(`${row}${column + 1}`).style.background = turn === 1 ? 'red' : 'blue'
            // Change the turn, now is playing another player
            turn = turn === 1 ? 2 : 1
            // Change the number of the player in the message
            playerNum.innerHTML = turn
            
            break
        }
    }
    // Check if the game is over, if yes, alert
    seeIfItsOver() ? alert("Oh no, the game is over. :(") : null
    
}

// This will check if the game is over, that means that every cell is filled
function seeIfItsOver() {
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (board[i][j] === 0) {
                return false
            }
        }
    }
    return true
}

function checkWinner() {
    // Check if there is a winner
    // Check horizontal
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] === turn && board[i][j + 1] === turn && board[i][j + 2] === turn && board[i][j + 3] === turn) {
                return true
            }
        }
    }
    // Check vertical
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 7; j++) {
            if (board[i][j] === turn && board[i + 1][j] === turn && board[i + 2][j] === turn && board[i + 3][j] === turn) {
                return true
            }
        }
    }
    // Check diagonal
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] === turn && board[i + 1][j + 1] === turn && board[i + 2][j + 2] === turn && board[i + 3][j + 3] === turn) {
                return true
            }
        }
    }
    // Check diagonal
    for (let i = 0; i < 3; i++) {
        for (let j = 3; j < 7; j++) {
            if (board[i][j] === turn && board[i + 1][j - 1] === turn && board[i + 2][j - 2] === turn && board[i + 3][j - 3] === turn) {
                return true
            }
        }
    }
    return false
}

function sayWinner(){
    alert("Player " + turn + " won!")
    continuePlaying = false
}