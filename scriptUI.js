

let cellListeners = document.querySelectorAll(".cell");
cellListeners.forEach((cell)=>{
    cell.addEventListener("click", (e)=>{
    let getID = e.target.id;
    let sliceCell = getID.slice(4);
    let getColumnFromID = sliceCell.slice(1);
    let getRowFromID = sliceCell.slice(0,1);
    console.log("Column: " + getColumnFromID );
    console.log("Row: " + getRowFromID);
   
    });
});
