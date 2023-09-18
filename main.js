import './style.css'

let moveTurn = "r";

let scoreValue = 0;

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let x = 5;
let y = 5;

let foodX = randomIntFromInterval(0, 324);
let foodY = randomIntFromInterval(0, 324);

let snakeH = 20;

let moveFunc = () => { };

let moveInterval = setInterval(moveFunc, 6);

const setRightMove = () => {
  moveTurn = "r"
  moveFunc = () => {
    x += 1;
    snake.style.marginLeft = `${x}px`;
    if (x == 324) {
      clearInterval(moveInterval);

      const resultScore = document.createElement("div");
      resultScore.id = "resultScore";
      resultScore.innerHTML = "Score : " + scoreValue;

      result.append(message);
      result.append(document.createElement("br"));
      result.append(resultScore);
      result.append(document.createElement("br"));
      result.append(resetBtn);
      resultBackdrop.append(result);

      app.append(resultBackdrop);
    }

    if (foodX - 10 < x && x < foodX + 10 && foodY - 10 < y && y < foodY + 10) {
      scoreValue += 5;
      score.innerHTML = "score : " + scoreValue;
      foodX = randomIntFromInterval(0, 324);
      foodY = randomIntFromInterval(0, 324);
      food.style.marginLeft = foodX + "px";
      food.style.marginTop = foodY + "px";
      //snakeH += 20;
      //snake.style.height = snakeH + "px";
    }

  }
  clearInterval(moveInterval);
  moveInterval = setInterval(moveFunc, 6);
}
const setLeftMove = () => {
  moveTurn = "l"
  moveFunc = () => {
    x -= 1;
    snake.style.marginLeft = `${x}px`;
    if (x == 0) {
      clearInterval(moveInterval);
      
      const resultScore = document.createElement("div");
      resultScore.id = "resultScore";
      resultScore.innerHTML = "Score : " + scoreValue;
      
      result.append(message);
      result.append(document.createElement("br"));
      result.append(resultScore);
      result.append(document.createElement("br"));
      result.append(resetBtn);
      resultBackdrop.append(result);

      app.append(resultBackdrop);
    }

    if (foodX - 10 < x && x < foodX + 10 && foodY - 10 < y && y < foodY + 10) {
      scoreValue += 5;
      score.innerHTML = "score : " + scoreValue;
      foodX = randomIntFromInterval(0, 324);
      foodY = randomIntFromInterval(0, 324);
      food.style.marginLeft = foodX + "px";
      food.style.marginTop = foodY + "px";
      //snakeH += 20;
      //snake.style.height = snakeH + "px";
    }

  }

  clearInterval(moveInterval);
  moveInterval = setInterval(moveFunc, 6);
}
const setUpMove = () => {
  moveTurn = "t"
  moveFunc = () => {
    y -= 1;
    snake.style.marginTop = `${y}px`;
    if (y == 0) {
      clearInterval(moveInterval);
      
      const resultScore = document.createElement("div");
      resultScore.id = "resultScore";
      resultScore.innerHTML = "Score : " + scoreValue;
      
      result.append(message);
      result.append(document.createElement("br"));
      result.append(resultScore);
      result.append(document.createElement("br"));
      result.append(resetBtn);
      resultBackdrop.append(result);

      app.append(resultBackdrop);
    }

    if (foodX - 10 < x && x < foodX + 10 && foodY - 10 < y && y < foodY + 10) {
      scoreValue += 5;
      score.innerHTML = "score : " + scoreValue;
      foodX = randomIntFromInterval(0, 324);
      foodY = randomIntFromInterval(0, 324);
      food.style.marginLeft = foodX + "px";
      food.style.marginTop = foodY + "px";
      //snakeH += 20;
      //snake.style.height = snakeH + "px";
    }
  }
  clearInterval(moveInterval);
  moveInterval = setInterval(moveFunc, 6);
}
const setDownMove = () => {
  moveTurn = "b"
  moveFunc = () => {
    y += 1;
    snake.style.marginTop = `${y}px`;
    if (y == 324) {
      clearInterval(moveInterval);
      
      const resultScore = document.createElement("div");
      resultScore.id = "resultScore";
      resultScore.innerHTML = "Score : " + scoreValue;
      
      result.append(message);
      result.append(document.createElement("br"));
      result.append(resultScore);
      result.append(document.createElement("br"));
      result.append(resetBtn);
      resultBackdrop.append(result);

      app.append(resultBackdrop);
    }

    if (foodX - 10 < x && x < foodX + 10 && foodY - 10 < y && y < foodY + 10) {
      scoreValue += 5;
      score.innerHTML = "score : " + scoreValue;
      foodX = randomIntFromInterval(0, 324);
      foodY = randomIntFromInterval(0, 324);
      food.style.marginLeft = foodX + "px";
      food.style.marginTop = foodY + "px";
      //snakeH += 20;
      //snake.style.height = snakeH + "px";
    }
  }
  clearInterval(moveInterval);
  moveInterval = setInterval(moveFunc, 6);
}

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowRight":
      setRightMove();
      break;

    case "ArrowLeft":
      setLeftMove();
      break;

    case "ArrowUp":
      setUpMove();
      break;

    case "ArrowDown":
      setDownMove();
      break;
  }
})

const app = document.querySelector('#app');

const board = document.createElement("div");
board.className = "board";
board.style.width = "360px"


const snake = document.createElement("div");
snake.className = "snake";
snake.style.height = snakeH + "px";

const food = document.createElement("div");
food.className = "food";
food.style.marginLeft = foodX + "px";
food.style.marginTop = foodY + "px";

const control = document.createElement("div");
control.className = "control";

const btnR = document.createElement("button");
btnR.id = "btnR";
const btnRIcon = document.createElement("i");
btnRIcon.className = "fa fa-arrow-right";
btnR.append(btnRIcon);
btnR.addEventListener("click", setRightMove);

const btnU = document.createElement("button");
btnU.id = "btnU";
const btnUIcon = document.createElement("i");
btnUIcon.className = "fa fa-arrow-up";
btnU.append(btnUIcon);
btnU.addEventListener("click", setUpMove);

const btnD = document.createElement("button");
btnD.id = "btnD";
const btnDIcon = document.createElement("i");
btnDIcon.className = "fa fa-arrow-down";
btnD.append(btnDIcon);
btnD.addEventListener("click", setDownMove);

const btnL = document.createElement("button");
btnL.id = "btnL";
const btnLIcon = document.createElement("i");
btnLIcon.className = "fa fa-arrow-left";
btnL.append(btnLIcon);
btnL.addEventListener("click", setLeftMove);

const score = document.createElement("div");
score.className = "score";
score.innerHTML = "Score : " + scoreValue;

const resultBackdrop = document.createElement("div");
resultBackdrop.className = "resultBackdrop";

const result = document.createElement("div");
result.className = "result";
const message = document.createElement("div");
message.innerHTML = "You Losed!";

const resetBtn = document.createElement("button");
resetBtn.className = "resetBtn";
resetBtn.innerHTML = "Reset";
resetBtn.addEventListener("click", () => {
  window.location.href = "/";
})


control.append(btnU);
control.append(document.createElement("br"));
control.append(btnL);
control.append(btnD);
control.append(btnR);
control.append(score);

board.append(snake);
board.append(food);
app.append(board);
app.append(control);
