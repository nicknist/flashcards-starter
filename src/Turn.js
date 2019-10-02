const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Turn {
  constructor(guess, cardObject) {
    this.guess = guess;
    this.card = cardObject;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback(guess) {
    if (this.evaluateGuess() === true) {
      return 'Correct!';
    } else {
      return 'Incorrect!';
    }
  }
}

module.exports = Turn;
