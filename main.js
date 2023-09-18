import './style.css'

let moveTurn = "r";

let x = 5;
let y = 5;

let moveFunc = () => {};

let moveInterval = setInterval(moveFunc, 50);

const setRightMove = () => {
  moveTurn = "r"
  moveFunc = () => {
    x += 5;
    snake.style.marginLeft = `${x}px`;
    if(x == 335) {
      x = 0;
    }
  }
  clearInterval(moveInterval);
  moveInterval = setInterval(moveFunc, 50);
  console.log(maxSize)
}
const setLeftMove = () => {
  moveTurn = "l"
  moveFunc = () => {
    x -= 5;
    snake.style.marginLeft = `${x}px`;
    if(x == 0) {
      x = 335;
    }
  }
  clearInterval(moveInterval);
  moveInterval = setInterval(moveFunc, 50);
}
const setUpMove = () => {
  moveTurn = "t"
  moveFunc = () => {
    y -= 5;
    snake.style.marginTop = `${y}px`;
    if(y == 0) {
      y = 335;
    }
  }
  clearInterval(moveInterval);
  moveInterval = setInterval(moveFunc, 50);
}
const setDownMove = () => {
  moveTurn = "b"
  moveFunc = () => {
    y += 5;
    snake.style.marginTop = `${y}px`;
    if(y == 335) {
      y = 0;
    }
  }
  clearInterval(moveInterval);
  moveInterval = setInterval(moveFunc, 50);
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
let maxSize = board.style.width;

const snake = document.createElement("div");
snake.className = "snake";



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









control.append(btnR);
control.append(btnL);
control.append(btnU);
control.append(btnD);

board.append(snake);
app.append(board);
app.append(control);