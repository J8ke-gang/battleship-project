class Player {
  constructor(name, type, gameboard) {
    this.name = name;
    this.type = type;
    this.gameboard = gameboard;
  }

  attack(opponent, coordinates) {
    if (this.type === "computer") {
      if (
        opponent.Player.Gameboard[coordinates] === "X" ||
        opponent.Player.Gameboard[coordinates] === "O"
      ) {
        return false;
      }
      return opponent.Player.receiveAttack(coordinates);
    }
  }
}

export default Player;
