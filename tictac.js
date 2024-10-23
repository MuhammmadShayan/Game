let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
 
let turnO = true; //playerX, playerO

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];
 const resetGame= ()=>{
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
 }
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was clicked");
        if(turnO === true){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const enabledBoxes = ()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
}

const disabledBoxes = ()=>{
    for (let box of boxes){
        box.disabled = true;
    }

}

const showWinner =(winner)=>{
    msg.innerText =`Congratulation winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
 
const checkWinner=()=>{
    for(let pattern of winPattern){
        let pattval1 = boxes[pattern[0]].innerText;
        let pattval2 = boxes[pattern[1]].innerText;
        let pattval3 = boxes[pattern[2]].innerText;

        if(pattval1 != "" && pattval2 != "" && pattval3 !=""){
            if(pattval1===pattval2 && pattval2 === pattval3){
                console.log("winner", pattval1);
                showWinner(pattval1);
            }
        }
    }
}
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);