// tic tac toe game

/*  - game board module
        - store game board as an array
        - methods:
            - get game board
            - make move
            - reset
            - check if full
    - player factory
    - game controller module
*/

// game board
const gameBoard = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];

    const getBoard = () => board;

    const makeMove = (index, marker) => {
        if (board[index] === '') {
            board[index] = marker;
            return true;
        }
        return false;
    }

    const reset = () => {
        board = ['', '', '', '', '', '', '', '', ''];
    }

    const isFull = () => {
        return board.every(cell => cell !== '');
    }

    return { getBoard, makeMove, reset, isFull };

})();

// player factory
const Player = (name, marker) => {
    return { name, marker };
}