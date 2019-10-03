const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe ('Game', function() {
  let game;

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
    expect(game.deck.cards.length).to.equal(30);
  });

  it('start method should create Deck', function() {
    game.start();
    expect(game.deck).to.be.instanceof(Deck);
  });

  it('start method should put Cards in Deck', function() {
    game.start();
    expect(game.deck.cards).to.deep.equal(prototypeQuestions);
  });
});
