import Player from "./player.js";
import GameBoard from "./gameboard.js"; // Import GameBoard
import AI from "./ai.js"; // Import AI
import createGrid from "./grid.js"; // Import createGrid

class Game {
  constructor() {
    this.playerBoard = new GameBoard();
    this.aiBoard = new GameBoard();
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

// Export the Game class correctly
export default Game;
