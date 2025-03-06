import Player from "../src/player.js";

test("initialize player name, type and gameboard", () => {
    const player = new Player("computer", "human", {}); // Corrected instantiation of Player
  
    expect(player.name).toBe("computer");  // Access the instance properties
    expect(player.type).toBe("human");     // Access the instance properties
    expect(player.gameboard).toBeDefined(); // Ensure gameboard is defined
  });
  
