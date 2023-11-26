const gameBoard = (function () {
    const rowsAndColums = 3;
    const board =[];

    for (let i = 0; i < rowsAndColums; i++) {
        board[i] = [];
        for (let j = 0; j < rowsAndColums; j++) {
          board[i].push("X");
        }
    }
    return board;
})();

const getCoordinates = function(){
    const choiceRow = prompt("give row 0-2");
    const choiceColumn = prompt("give column 0-2");

    if(choiceColumn > 2 || choiceRow > 2){
        alert("wrong number");
    }

    return{choiceColumn, choiceRow};
};

const playerRound = function(gameBoard,choiceColumn,choiceRow){
     return (gameBoard[choiceRow][choiceColumn] = "O")
 };


const playOneGame = function(){
    const coordinates = getCoordinates();
    const { choiceColumn, choiceRow } = coordinates;
    playerRound(gameBoard, choiceColumn, choiceRow);
    console.log(gameBoard);
}

playOneGame();
playOneGame();
playOneGame();
playOneGame();
playOneGame();
playOneGame();