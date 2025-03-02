class BattleshipAI {
  constructor(boardSize) {
    this.boardSize = boardSize;
    this.shots = new Set();
  }

  generateRandomCoordinate() {
    const x = Math.floor(Math.random() * this.boardSize);
    const y = Math.floor(Math.random() * this.boardSize);
    return { x, y };
  }

  getNextShot() {
    let shot;
    do {
      shot = this.generateRandomCoordinate();
    } while (this.shots.has(`${shot.x},${shot.y}`));
    this.shots.add(`${shot.x},${shot.y}`);
    return shot;
  }
}

export default BattleshipAI;
