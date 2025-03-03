import Player from "./player.js";
import AI from "./ai.js";
import createGrid from "./grid.js"; // Adjust the path as necessary

class GameBoard {
  constructor(playerBoard, aiBoard) {
    this.playerBoard = playerBoard || this;
    this.aiBoard = aiBoard || this;
    this.player = new Player("User", "human", this.playerBoard);
    this.ai = new AI("Computer", this.aiBoard);
  }

  start() {
    this.setupUI();
    this.addEventListeners();
  }

  setupUI() {
    const playerGrid = document.getElementById("player-grid");
    const aiGrid = document.getElementById("computer-grid");

    createGrid(playerGrid);
    createGrid(aiGrid);
  }

  addEventListeners() {
    const aiGrid = document.getElementById("computer-grid");

    aiGrid.addEventListener("click", (event) => {
      const x = event.target.dataset.x;
      const y = event.target.dataset.y;

      if (x !== undefined && y !== undefined) {
        this.player.attack(this.aiBoard, Number(x), Number(y));
        this.ai.randomMove(this.playerBoard);
      }
    });
  }
}

export default GameBoard;
