function createGrid(container) {
  if (!container) {
    console.error("Grid container not found");
    return;
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      cell.dataset.x = i;
      cell.dataset.y = j;
      container.appendChild(cell);
    }
  }
}

export default createGrid;
