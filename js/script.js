const btnStart = document.getElementById("btn_start");
const gridContainer = document.querySelector(".grid_container");
const gameLevel = document.getElementById("game-level");

//Reset gioco
reset();

//Generazione griglia di gioco
btnStart.addEventListener("click", function () {
  reset();

  const cellTotal = countCellTotal(gameLevel.value);
  defineGridDimension(cellTotal);

  for (let i = 1; i <= cellTotal; i++) {
    const cell = createCell(i);
    gridContainer.append(cell);
  }
});

// ------ FUNCTIONS ------ //
function reset() {
  gridContainer.innerHTML = "";
}

function countCellTotal(level) {
  if (level === "easy") {
    return 100;
  } else if (level === "medium") {
    return 81;
  }
  return 49;
}

function defineGridDimension(numberOfCells) {
  if (numberOfCells === 100) {
    gridContainer.style.gridTemplateColumns = "repeat(10, 1fr)";
  } else if (numberOfCells === 81) {
    gridContainer.style.gridTemplateColumns = "repeat(9, 1fr)";
  } else if (numberOfCells === 49) {
    gridContainer.style.gridTemplateColumns = "repeat(7, 1fr)";
  }
}

function createCell(index) {
  const cellElement = document.createElement("div");
  cellElement.className = "cell";
  cellElement._cellID = index;

  cellElement.addEventListener("click", function () {
    const cellNumber = this._cellID;
    console.log(cellNumber);

    this.innerHTML = !this.classList.contains("clicked")
      ? (this.innerHTML = cellNumber)
      : (this.innerHTML = "");

    this.classList.toggle("clicked");
  });

  return cellElement;
}
