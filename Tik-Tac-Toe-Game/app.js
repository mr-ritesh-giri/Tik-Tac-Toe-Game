let key = document.querySelectorAll(".box");
let resetKey = document.querySelector(".reset-btn");
let newGame = document.querySelector(".new-btn");
let msgC = document.querySelector(".hide");
let msgText = document.querySelector(".msg");
let gameField = document.querySelectorAll(".game");
let startBtn = document.getElementById("startBtn");
let firstPage = document.getElementById("firstPage");
let container = document.getElementsByClassName("container");

let turn = true;

let count = 0;

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let draw = (showWinner) => {
  if (count === 9) {
    gameDraw();
  }
};
const gameDraw = () => {
  msgText.innerHTML = `Game Draws.`;
  msgC.classList.remove("hide");
};

let closing = startBtn.addEventListener("click", function () {
  firstPage.classList.add("hide");
  firstPage.style.display = "none";
});
key.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn === true) {
      box.innerText = "O";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const newGameBtn = () => {
  newGame.addEventListener("click", () => {
    key.forEach((box) => {
      box.innerText = "";
      box.disabled = false;
      msgC.classList.add("hide");
    });
  });
};
newGameBtn();

const resetBtn = () => {
  resetKey.addEventListener("click", () => {
    console.log("Clearing box content");
    key.forEach((box) => {
      box.innerText = "";
      box.disabled = false;
    });
  });
};
resetBtn();

const showWinner = (winner) => {
  msgText.innerHTML = `Congratulations,Winner is ${winner}.`;
  msgC.classList.remove("hide");
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    const posVal1 = key[pattern[0]].innerText;
    const posVal2 = key[pattern[1]].innerText;
    const posVal3 = key[pattern[2]].innerText;
    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        console.log("Winner", posVal1);
        showWinner(posVal1);
        hideGame();
      }
    }
  }
};
