import Game from "./game.js"; // Correct import path
import "./styles.css";

document.addEventListener("DOMContentLoaded", function () {
  const game = new Game(); // Initialize the game
  game.start(); // Start the game
});