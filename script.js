const gameBoard = (function () {
    const rowsAndColums = 3;
    const board =[];

    for (let i = 0; i < rowsAndColums; i++) {
        board[i] = [];
        for (let j = 0; j < rowsAndColums; j++) {
          board[i].push(" ");
        };
    };
    return board;
})();


const gameRules = (function (){
    let playerFlag = true;
    let isGameWon = false;
    let spacesLeft = 9;

    const playTurn = (getColumnFromID, getRowFromID) =>{
        console.log("Column: " + getColumnFromID );
        console.log("Row: " + getRowFromID);
        const myBoard = gameBoard;

        if(myBoard[getRowFromID][getColumnFromID] === "O"){ //check if space is already populated, if so, push either X or O back
            alert("Already taken");
            myBoard[getRowFromID][getColumnFromID] = "O";
        }else if(myBoard[getRowFromID][getColumnFromID] ==="X"){
            alert("Already taken");
            myBoard[getRowFromID][getColumnFromID] = "X";
        }else{
            if(playerFlag === true){                        //if its not populated, push X or O
                myBoard[getRowFromID][getColumnFromID] = "O";
                playerFlag = false;
                spacesLeft--;
            }else if(playerFlag === false){
                myBoard[getRowFromID][getColumnFromID] = "X";
                playerFlag = true;
                spacesLeft--;
            }
        };
        console.log(...myBoard);
        return checkBoard(myBoard,getColumnFromID,getRowFromID);
};

     const resetBoard = (myBoard) =>{
        for (let i = 0; i < myBoard.length; i++) {
            for (let j = 0; j < myBoard[i].length; j++) {
                myBoard[i][j] = " ";
            }
        }
     };

    const checkBoard = (myBoard,getColumnFromID,getRowFromID) => {
         if(myBoard[getRowFromID][0]==="O"
          &&myBoard[getRowFromID][1]==="O"
          &&myBoard[getRowFromID][2]==="O"){
             alert("O won the game");
             resetBoard(myBoard);
             playerFlag = true;
             spacesLeft = 9;
         }else if(myBoard[0][getColumnFromID]==="O" // vertical win conditions for O
         &&myBoard[1][getColumnFromID]==="O"
         &&myBoard[2][getColumnFromID]==="O"){
            alert("O won the game");
            resetBoard(myBoard);
            playerFlag = true;
            spacesLeft = 9;
        }else if(myBoard[1][1]==="O" // diagonal for O
        &&myBoard[0][0]==="O"
        &&myBoard[2][2]==="O"){
            alert("O won the game");
            resetBoard(myBoard);
            playerFlag = true;
            spacesLeft = 9;
        }else if(myBoard[1][1]==="O" //  diagonal for O
        &&myBoard[0][2]==="O"
        &&myBoard[2][0]==="O"){
            alert("O won the game");
            resetBoard(myBoard);
            playerFlag = true;
            spacesLeft = 9;
        }else if(myBoard[getRowFromID][0]==="X" 
        &&myBoard[getRowFromID][1]==="X"
        &&myBoard[getRowFromID][2]==="X"){
            alert("X won the game");
            resetBoard(myBoard);
            playerFlag = true;
            spacesLeft = 9;
        }else if(myBoard[0][getColumnFromID]==="X" 
        &&myBoard[1][getColumnFromID]==="X"
        &&myBoard[2][getColumnFromID]==="X"){
            alert("X won the game");
            resetBoard(myBoard);
            playerFlag = true;
            spacesLeft = 9;
        }else if(myBoard[1][1]==="X" 
        &&myBoard[0][0]==="X"
        &&myBoard[2][2]==="X"){
            alert("X won the game");
            resetBoard(myBoard);
            playerFlag = true;
            spacesLeft = 9;
        }else if(myBoard[1][1]==="X"
        &&myBoard[0][2]==="X"
        &&myBoard[2][0]==="X"){
            alert("X won the game");
            resetBoard(myBoard);
            playerFlag = true;
            spacesLeft = 9;
        }else if(spacesLeft === 0){
            alert("Its a tie!");
            resetBoard(myBoard);
            playerFlag = true;
            spacesLeft = 9;
        };
    };

    return {
            playTurn
        };      
})();

const uiListeners = (function(){
    let cellListeners = document.querySelectorAll(".cell");
    cellListeners.forEach((cell)=>{
    cell.addEventListener("click", (e)=>{
    let getID = e.target.id;
    let sliceCell = getID.slice(4);

    let getRowFromID = parseInt(sliceCell.slice(1));
    let getColumnFromID = parseInt(sliceCell.slice(0,1));
    
    gameRules.playTurn(getRowFromID,getColumnFromID);
    });
});
})();
