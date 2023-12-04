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
    let spacesLeft = 9;

    const playTurn = (getColumnFromID, getRowFromID, clickedCell) =>{
        console.log("Column: " + getColumnFromID );
        console.log("Row: " + getRowFromID);
        const myBoard = gameBoard;

        if(myBoard[getRowFromID][getColumnFromID] === "O"){ //check if space is already populated, if so, push either X or O back
            alert("Already taken");
            myBoard[getRowFromID][getColumnFromID] = "O";
        }else if(myBoard[getRowFromID][getColumnFromID] ==="X"){
            alert("Already taken");
            myBoard[getRowFromID][getColumnFromID] = "X";
        }else{                          //if its not populated, push X or O
            if(playerFlag === true){      
                clickedCell.classList.add("O");               
                myBoard[getRowFromID][getColumnFromID] = "O";
                playerFlag = false;
                spacesLeft--;
            }else if(playerFlag === false){
                clickedCell.classList.add("X");
                myBoard[getRowFromID][getColumnFromID] = "X";
                playerFlag = true;
                spacesLeft--;
            }
        };
        console.log(...myBoard);
        checkBoard(myBoard,getColumnFromID,getRowFromID);
        switchNames(p1name,p2name);
        return myBoard;
};

    const switchNames = function(p1name,p2name){
        if(playerFlag === true){
        whosTurnIsIt.innerHTML = `Its ${p1name.value} turn`;
        }else{
        whosTurnIsIt.innerHTML = `Its ${p2name.value} turn`;
        }
    };

    const getWinner = function(whoWon){
        if(whoWon === "O"){
            alert(`${p1name.value} won`)
        }else if(whoWon === "T"){
            alert("Its a tie")
        }else{
            alert(`${p2name.value} won`)
        }
    }

     const resetBoard = (myBoard) =>{
        for (let i = 0; i < myBoard.length; i++) {
            for (let j = 0; j < myBoard[i].length; j++) {
                myBoard[i][j] = " ";
            }
        }
        playerFlag = true;
        let removeClasses = document.querySelectorAll(".cell");
        removeClasses.forEach((cell)=>{
            cell.classList.remove("O");
            cell.classList.remove("X");
        })
     };

    const checkBoard = (myBoard,getColumnFromID,getRowFromID) => {
         if(myBoard[getRowFromID][0]==="O"
          &&myBoard[getRowFromID][1]==="O"
          &&myBoard[getRowFromID][2]==="O"){
            getWinner("O"); 
            spacesLeft = 9; 
         }else if(myBoard[0][getColumnFromID]==="O" // vertical win conditions for O
         &&myBoard[1][getColumnFromID]==="O"
         &&myBoard[2][getColumnFromID]==="O"){
            getWinner("O");
            spacesLeft = 9;
        }else if(myBoard[1][1]==="O" // diagonal for O
        &&myBoard[0][0]==="O"
        &&myBoard[2][2]==="O"){
            getWinner("O");
            spacesLeft = 9;
        }else if(myBoard[1][1]==="O" //  diagonal for O
        &&myBoard[0][2]==="O"
        &&myBoard[2][0]==="O"){
            getWinner("O");
            spacesLeft = 9;
        }else if(myBoard[getRowFromID][0]==="X" 
        &&myBoard[getRowFromID][1]==="X"
        &&myBoard[getRowFromID][2]==="X"){
            getWinner("X");
            spacesLeft = 9;
        }else if(myBoard[0][getColumnFromID]==="X" 
        &&myBoard[1][getColumnFromID]==="X"
        &&myBoard[2][getColumnFromID]==="X"){
            getWinner("X");
            spacesLeft = 9;
        }else if(myBoard[1][1]==="X" 
        &&myBoard[0][0]==="X"
        &&myBoard[2][2]==="X"){
            getWinner("X");
            spacesLeft = 9;
        }else if(myBoard[1][1]==="X"
        &&myBoard[0][2]==="X"
        &&myBoard[2][0]==="X"){
            getWinner("X");
            spacesLeft = 9; 
        }else if(spacesLeft === 0){
            getWinner("T");
            spacesLeft = 9;            
        };
    };

    return {
            playTurn,resetBoard, playerFlag
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

    let clickedCell = e.target;
    
    gameRules.playTurn(getRowFromID,getColumnFromID, clickedCell);
        }); 
    });

let resetListener = document.getElementById("reset");
resetListener.addEventListener("click", ()=>{
    const myBoard = gameBoard;
    gameRules.resetBoard(myBoard)
    });

    

playerNames.addEventListener('submit', function() {
    let p1name = document.getElementById('p1name').value;
    console.log(p1name)
    
    let p2name = document.getElementById('p2name').value;
    return {p1name,p2name};
    });      
})();

(function () {
    playerNames.showModal();
})();

function closeModal() {
    playerNames.close();
     playerNames.style.display = "none";
}






