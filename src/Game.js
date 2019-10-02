const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.deck = null;
    this.currentRoundNumber = 0;
  }

  currentRound() {
    return this.currentRoundNumber;
  }

  start() {
    let cards = [];
    prototypeQuestions.forEach(function(dataSet) {
      let newCard = new Card(dataSet);
      cards.push(newCard);
    });
    this.deck = new Deck(cards);
    this.currentRoundNumber += 1;
    let round = new Round(this.deck);
    this.printMessage(this.deck, round);
    this.printQuestion(round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
