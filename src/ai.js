class AI {
  constructor(name, board) {
    this.name = name;
    this.board = board;  // This should be a GameBoard instance
  }

  randomMove() {
    // Pick random coordinates
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    // Call the receiveAttack method on the playerBoard
    const hit = this.board.receiveAttack(x, y);
    console.log(`${this.name} attacked ${x},${y}: ${hit ? "hit" : "miss"}`);
  }
}

export default AI;