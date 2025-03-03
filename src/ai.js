import Player from "./player.js";

class AI extends Player {
  constructor(name, board) {
    super(name, "computer", board);
  }

  randomMove(playerBoard) {
    const x = Math.floor(Math.random() * playerBoard.size);
    const y = Math.floor(Math.random() * playerBoard.size);
    playerBoard.receiveAttack(x, y);
  }
}

export default AI;
