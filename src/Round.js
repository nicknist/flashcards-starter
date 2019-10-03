const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turnsTaken = 0;
    this.incorrectGuesses = [];
    this.startTime = Date.now();
    this.totalTime = null;
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    this.turnsTaken += 1;
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    let index = (this.deck.cards.indexOf(this.currentCard) + 1)
    this.currentCard = this.deck.cards[index];
    return turn.giveFeedback(guess);
  }

  calculatePercentCorrect() {
    if (this.incorrectGuesses.length === 0) {
      return 100;
    } else {
      return Math.floor((1 - (this.incorrectGuesses.length /
        this.turnsTaken)) * 100);
    }
  }

  calculateMinutes() {
    let endTime = Date.now();
    this.totalTime = Math.floor((endTime - this.startTime) / 1000);
    let totalSeconds = this.totalTime;
    let minutes = Math.floor(totalSeconds / 60);
    return minutes;
  }

  calculateSeconds() {
    let totalSeconds = this.totalTime % 60;
    return totalSeconds;
  }

  endRound() {
    console.log(`**Round Over!** You answered
      ${this.calculatePercentCorrect()}% of the questions correctly in
      ${this.calculateMinutes()} minutes and ${this.calculateSeconds()}
      seconds!`);
  }
}

module.exports = Round;
