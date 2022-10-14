getId = (id) => document.getElementById(id)

let turn = 1
let win = false

let board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

function iClicked(id) {
    if (win == false) {
        let row = id.substring(1) - 1 // 0, 1, 2
        let colLetter = id.substring(0, 1) // a, b, c
        let col = letterToNumber(colLetter) // 0, 1, 2
        let cell = colLetter + (row + 1)
        console.log(getId(cell))

        if (board[row][col] == 0) {
            if (turn % 2 == 0) {
                console.log(cell)
                getId(cell).innerHTML = 'X'
                board[row][col] = 1
            } else {
                getId(cell).innerHTML = 'O'
                console.log(cell)
                board[row][col] = 2
            }
            turn++
            checkWin()
        }
    }
}

function letterToNumber(letter) {
    switch (letter) {
        case 'a':
            return 0
        case 'b':
            return 1
        case 'c':
            return 2
    }
}

function checkWin() {
    win = false
    for (let i = 0; i < 3; i++) {
        if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != 0) {
            win = true
            if (board[i][0] == 1) {
                alert('Player 1 wins!')
            } else if (board[i][0] == 2) {
                alert('Player 2 wins!')
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != 0) {
            win = true
            if (board[0][i] == 1) {
                alert('Player 1 wins!')
            } else if (board[0][i] == 2) {
                alert('Player 2 wins!')
            }
        }
    }
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != 0) {
        win = true
        if (board[0][0] == 1) {
            alert('Player 1 wins!')
        } else if (board[0][0] == 2) {
            alert('Player 2 wins!')
        }
    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != 0) {
        win = true
        if (board[0][2] == 1) {
            alert('Player 1 wins!')
        } else if (board[0][2] == 2) {
            alert('Player 2 wins!')
        }
    }
    if (win == false) {
        if (turn == 10) {
            alert('Tie!')
        }
    }
}