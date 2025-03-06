class GameBoard {
  constructor() {
    this.board = Array(10).fill(null).map(() => Array(10).fill(null)); // 10x10 grid
    this.ships = [];  // Array to hold ships
  }

  // Add ships to the board
  addShipToBoard(ship) {
    // Logic for adding a ship (same as in the previous example)
  }

  // Method to handle receiving an attack on the board
  receiveAttack(x, y) {
    const cell = this.board[y][x];
    if (cell !== null && cell !== "hit" && cell !== "miss") {
      // The cell contains a ship
      cell.hit();  // Register the hit on the ship
      this.board[y][x] = "hit";  // Mark as hit
      return true;
    }
    this.board[y][x] = "miss";  // Mark as miss if no ship
    return false;
  }
}

export default GameBoard;
