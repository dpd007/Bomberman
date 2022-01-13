const bombs = [];
const greenCols = [];
let gamePoints = 0;
let canPlay = true;
const appElement = document.getElementById("app");
const gamePointsDiv = document.getElementById("gamePoints");
const addGrid = () => {
  for (let i = 0; i < 9; i++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.justifyContent = "center";
    for (let j = 0; j < 9; j++) {
      const index = i * 9 + j; //for accessing a particular column div
      const col = document.createElement("div");
      col.style.display = "inline-block";
      col.style.height = "60px";
      col.style.width = "60px";
      col.style.border = "1px solid black";
      col.style.textAlign = "center";
      col.style.verticalAlign = "middle";
      col.setAttribute("index", index);
      if (greenCols.includes(index) == false) {
        col.addEventListener("click", () => {
          if (bombs.includes(index)) {
            canPlay = false;
            const bombImg = document.createElement("i");
            bombImg.setAttribute("class", "fa fa-bomb X2");
            bombImg.setAttribute("aria-hidden", "true");
            col.appendChild(bombImg);
            updateGamePoints(gamePoints, canPlay);
          } else {
            greenCols.push(index);
            col.style.backgroundColor = "green";
            canPlay = true;
            gamePoints++;
            updateGamePoints(gamePoints, canPlay);
          }
        });
      } else {
        col.removeEventListener("click", "mouse click", false);
      }
      row.appendChild(col);
    }
    appElement.appendChild(row);
  }
};
const generateBombs = () => {
  while (bombs.length <= 10) {
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber < 81 && !bombs.includes(randomNumber)) {
      bombs.push(randomNumber);
    }
  }
};
const updateGamePoints = (gamePoints, canPlay) => {
  if (canPlay == true) {
    gamePointsDiv.innerHTML = "Game Points " + gamePoints;
  } else {
    alert("you can't play further");
    gamePointsDiv.innerHTML = "Your score is " + gamePoints;
    appElement.disabled = "true";
  }
};
addGrid();
generateBombs();
// console.log(bombs);

// Show all the Bombs once a bomb is clicked
// Give a button to start the game again
// Every column should be only clickable once
//if all normal cells are clicked and none is left then show alert that you won
//if a bomb is clicked then show alert that you lost
