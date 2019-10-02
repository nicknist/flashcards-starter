const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe ('Game', function() {
  //need any lets?
  let game;
  //need a beforeEach??
  beforeEach( () => {
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be instantiated version of Game', function() {
    expect(game).to.be.instanceof(Game);
  });

  it('should have the currentRound method', function() {
    expect(game.currentRound).to.be.a('function');
  });

  it('should have a start method', function() {
    expect(game.start).to.be.a('function');
  });

  it('start method should create Cards', function() {
    game.start();
    game.deck.cards.forEach(function(card) {
      expect(card).to.be.instanceof(Card);
    })
  });

  it('start method should create Deck', function() {
    game.start();
    expect(game.deck).to.be.instanceof(Deck);
  });

  it('start method should put Cards in Deck', function() {
    game.start();
    expect(game.deck.cards).to.deep.equal(prototypeQuestions);
  });

//   it.skip('start method should invoke printmessage in CLI', function() {
//     expect(console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
// -----------------------------------------------------------------------`)).to.equal(printMessage(deck, round));
//
//   });
//
//   it.skip('start method should invoke printquestion to kick off helper function that allows interaction in CLI', function() {
//
//   });
});
