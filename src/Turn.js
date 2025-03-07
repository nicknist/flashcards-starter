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

  giveFeedback() {
    if (this.evaluateGuess() === true) {
      return 'Correct!';
    } else {
      return 'Incorrect!';
    }
  }
}

module.exports = Turn;
