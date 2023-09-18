import './style.css'

let moveTurn = "r";

let scoreValue = 0;

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let x = 5;
let y = 5;

let foodX = randomIntFromInterval(0, 335);
let foodY = randomIntFromInterval(0, 335);

let snakeH = 20;

let moveFunc = () => {};

let moveInterval = setInterval(moveFunc, 6);

const setRightMove = () => {
  moveTurn = "r"
  moveFunc = () => {
    x += 1;
    snake.style.marginLeft = `${x}px`;
    if(x == 338) {
      clearInterval(moveInterval);
      app.append(result);
    }

    if(foodX - 10 < x && x < foodX + 10 && foodY - 10 < y && y < foodY + 10) {
      scoreValue += 5;
      score.innerHTML = "score : " + scoreValue;
      foodX = randomIntFromInterval(0, 335);
      foodY = randomIntFromInterval(0, 335);
      food.style.marginLeft = foodX + "px";
      food.style.marginTop =  foodY + "px";
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
    if(x == 0) {
      clearInterval(moveInterval);
      app.append(result);
    }

    if(foodX - 10 < x && x < foodX + 10 && foodY - 10 < y && y < foodY + 10) {
      scoreValue += 5;
      score.innerHTML = "score : " + scoreValue;
      foodX = randomIntFromInterval(0, 335);
      foodY = randomIntFromInterval(0, 335);
      food.style.marginLeft = foodX + "px";
      food.style.marginTop =  foodY + "px";
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
    if(y == 0) {
      clearInterval(moveInterval);
      app.append(result);
    }

    if(foodX - 10 < x && x < foodX + 10 && foodY - 10 < y && y < foodY + 10) {
      scoreValue += 5;
      score.innerHTML = "score : " + scoreValue;
      foodX = randomIntFromInterval(0, 335);
      foodY = randomIntFromInterval(0, 335);
      food.style.marginLeft = foodX + "px";
      food.style.marginTop =  foodY + "px";
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
    if(y == 338) {
      clearInterval(moveInterval);
      app.append(result);
    }

    if(foodX - 10 < x && x < foodX + 10 && foodY - 10 < y && y < foodY + 10) {
      scoreValue += 5;
      score.innerHTML = "score : " + scoreValue;
      foodX = randomIntFromInterval(0, 335);
      foodY = randomIntFromInterval(0, 335);
      food.style.marginLeft = foodX + "px";
      food.style.marginTop =  foodY + "px";
      //snakeH += 20;
      //snake.style.height = snakeH + "px";
    }
  }
  clearInterval(moveInterval);
  moveInterval = setInterval(moveFunc, 6);
}

document.addEventListener("keydown", (event) => {
  switch(event.key) {
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
food.style.marginTop =  foodY + "px";

const control = document.createElement("div");
control.className = "control";

const btnR = document.createElement("button");
btnR.innerHTML = "R";
btnR.addEventListener("click", setRightMove);

const btnL = document.createElement("button");
btnL.innerHTML = "L";
btnL.addEventListener("click", setLeftMove);

const btnU = document.createElement("button");
btnU.innerHTML = "U";
btnU.addEventListener("click", setUpMove);

const btnD = document.createElement("button");
btnD.innerHTML = "B";
btnD.addEventListener("click", setDownMove);

const score = document.createElement("div");
score.className = "score";
score.innerHTML = "score : " + scoreValue;

const result = document.createElement("div");
result.className = "result";
result.innerHTML = "You Losed!";







control.append(btnR);
control.append(btnL);
control.append(btnU);
control.append(btnD);
control.append(score);

board.append(snake);
board.append(food);
app.append(board);
app.append(control);