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

    const checkBoard = (myBoard,getColumnFromID,getRowFromID) => {
        console.log(myBoard);
        console.log(getColumnFromID);
        console.log(getRowFromID);

         if(myBoard[getRowFromID][0]==="O"
         &&myBoard[getRowFromID][1]==="O"
         &&myBoard[getRowFromID][2]==="O"){
             alert("O won the game");
            myBoard = " ";
         }

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
    // let getColumnFromID = parseInt(sliceCell.slice(1));
    // let getRowFromID = parseInt(sliceCell.slice(0,1));
    let getRowFromID = parseInt(sliceCell.slice(1));
    let getColumnFromID = parseInt(sliceCell.slice(0,1));
    
    gameRules.playTurn(getRowFromID,getColumnFromID);

   
    });
});
})();
