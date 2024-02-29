const btnStart = document.getElementById("btn_start");
const gridContainer = document.querySelector(".grid_container");
const cellTotal = 100;

//Reset gioco
reset();

//Generazione griglia di gioco
btnStart.addEventListener("click", function () {
  for (let i = 1; i <= cellTotal; i++) {
    const cell = createCell(i);
    gridContainer.append(cell);
  }
});

// ------ FUNCTIONS ------ //
function reset() {
  gridContainer.innerHTML = "";
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
