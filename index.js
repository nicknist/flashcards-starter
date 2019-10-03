const http = require('http');
let app = http.createServer();
const Game = require('../flash-cards/src/Game');
let game = new Game();

// Start the server on port 3000
app.listen(3000, '127.0.0.1');

game.start();
if (game.currentRoundNumber === 29) {
  game.endRound();
}
