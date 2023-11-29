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

    while(isGameWon === false){    
        const getCoordinates = () =>{
            let choiceRow, choiceColumn;

            while (true) {
                choiceRow = parseInt(prompt("Give row 0-2"));
                choiceColumn = parseInt(prompt("Give column 0-2"));
        
                if(
                    (choiceRow >= 0 && choiceRow <= 2 && !isNaN(choiceRow)) &&
                    (choiceColumn >= 0 && choiceColumn <= 2 && !isNaN(choiceColumn))
                ){
                    break; // Break the loop if both row and column values are valid
                }else{
                    alert("Invalid input. Please enter a number between 0 and 2.");
                }
            }
        
            return { choiceColumn, choiceRow };
        };

        let coordinates = getCoordinates();

        const playTurn = () =>{
            const myBoard = gameBoard;
            const {choiceColumn, choiceRow} = coordinates;

            if(myBoard[choiceRow][choiceColumn] === "O"){ //check if space is already populated, if so, push either X or O back
                alert("Already taken");
                myBoard[choiceRow][choiceColumn] = "O";
            }else if(myBoard[choiceRow][choiceColumn] ==="X"){
                alert("Already taken");
                myBoard[choiceRow][choiceColumn] = "X";
            }else{
                if(playerFlag === true){                        //if its not populated, push X or O
                    myBoard[choiceRow][choiceColumn] = "O";
                    playerFlag = false;
                    spacesLeft--;
                }else if(playerFlag === false){
                    myBoard[choiceRow][choiceColumn] = "X";
                    playerFlag = true;
                    spacesLeft--;
                }
        };
            console.log(...myBoard);
            return myBoard;
        };
        let boardToCheck = playTurn();

        const gameOver = () =>{
            const {choiceColumn, choiceRow} = coordinates;

            if(boardToCheck[choiceRow][0]==="O" //horizontal win condition for O
            &&boardToCheck[choiceRow][1]==="O"
            &&boardToCheck[choiceRow][2]==="O"){
                alert("O won");
                return isGameWon = true;
            }else if(boardToCheck[0][choiceColumn]==="O" // vertical win conditions for O
            &&boardToCheck[1][choiceColumn]==="O"
            &&boardToCheck[2][choiceColumn]==="O"){
                alert("O won");
                return isGameWon = true;
            }else if(boardToCheck[1][1]==="O" // diagonal for O
            &&boardToCheck[0][0]==="O"
            &&boardToCheck[2][2]==="O"){
                alert("O won");
                return isGameWon = true;
            }else if(boardToCheck[1][1]==="O" //  diagonal for O
            &&boardToCheck[0][2]==="O"
            &&boardToCheck[2][0]==="O"){
                alert("O won");
                return isGameWon = true;
            }else if(boardToCheck[choiceRow][0]==="X" 
            &&boardToCheck[choiceRow][1]==="X"
            &&boardToCheck[choiceRow][2]==="X"){
                alert("X won");
                return isGameWon = true;
            }else if(boardToCheck[0][choiceColumn]==="X" 
            &&boardToCheck[1][choiceColumn]==="X"
            &&boardToCheck[2][choiceColumn]==="X"){
                alert("X won");
                return isGameWon = true;
            }else if(boardToCheck[1][1]==="X" 
            &&boardToCheck[0][0]==="X"
            &&boardToCheck[2][2]==="X"){
                alert("X won");
                return isGameWon = true;
            }else if(boardToCheck[1][1]==="X"
            &&boardToCheck[0][2]==="X"
            &&boardToCheck[2][0]==="X"){
                alert("X won");
                return isGameWon = true;
            }else if(spacesLeft === 0){
                alert("its a tie");
                return isGameWon = true;
            }
        };
        gameOver();
        console.log(isGameWon);
    };
})();