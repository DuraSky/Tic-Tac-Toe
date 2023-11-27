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
    let gameCounter = 0;

    while(gameCounter < 4){    
    const getCoordinates = () =>{
        const choiceRow = prompt("give row 0-2");
        const choiceColumn = prompt("give column 0-2");
    
        if(choiceColumn > 2 || choiceRow > 2){
            alert("wrong number");
        };

     return{choiceColumn, choiceRow};
    };

    let coordinates = getCoordinates();
  
    const playTurn = () =>{
        const myBoard = gameBoard;
        const {choiceColumn, choiceRow} = coordinates;
        
        let choiceColumnInt = parseInt(choiceColumn);
        let choiceRowInt = parseInt(choiceRow);

        if(playerFlag === true){
            myBoard[choiceRowInt][choiceColumnInt] = "O";
            playerFlag = false;
        }else if(playerFlag === false){
            myBoard[choiceRowInt][choiceColumnInt] = "X";
            playerFlag = true;
        }
        console.log(myBoard);
     gameCounter++;
    }

    playTurn();
};

    //return{getCoordinates, playTurn};
})();



