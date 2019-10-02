const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach( () => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);

  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be instantiated with a deck', function() {
    expect(round.deck).to.equal(deck);
  });

  it('should have the currentCard be the first card in the deck array', function() {
    expect(round.currentCard).to.equal(card1);
  });

  it('should have a returnCurrentCard method', function() {
    expect(round.returnCurrentCard).to.be.a('function');
  });

  it('returnCurrentCard method should return the current card being played', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should have a takeTurn method', function() {
    expect(round.takeTurn).to.be.a('function');
  });

  it('takeTurn method should create a new Turn instance', function() {
    //we can prove that a new Turn instance has been created if we are able to use the Turn methods
    //the takeTurn method uses turn.giveFeedback for these to function
    expect(round.takeTurn('sea otter')).to.equal('Correct!');
    expect(round.takeTurn('spleen')).to.equal('Incorrect!');
  });

  it('takeTurn method should update the amount of turns taken', function() {
    expect(round.turnsTaken).to.equal(0);
    round.takeTurn();
    expect(round.turnsTaken).to.equal(1);
  });

  it('takeTurn method should update the current card to the next card in the array', function() {
    expect(round.currentCard).to.equal(card1);
    round.takeTurn();
    expect(round.currentCard).to.equal(card2);
    round.takeTurn();
    expect(round.currentCard).to.equal(card3);
  });

  it('takeTurn method should store incorrect answers in an array based on their id', function() {
    expect(round.takeTurn('sea otter'));
    expect(round.incorrectGuesses).to.deep.equal([]);
    expect(round.takeTurn('spleen'));
    expect(round.incorrectGuesses).to.deep.equal([14]);
    expect(round.takeTurn('watching Netflix'));
    expect(round.incorrectGuesses).to.deep.equal([14, 12]);
  });

  it('takeTurn method should give feedback to the user based on correct or incorrect answer', function() {
    expect(round.takeTurn('sea otter')).to.equal('Correct!');
    expect(round.takeTurn('spleen')).to.equal('Incorrect!');
    expect(round.takeTurn('playing with bubble wrap')).to.equal('Correct!');
  });

  it('should have a calculatePercentCorrect method', function() {
    expect(round.calculatePercentCorrect).to.be.a('function');
  });

  it('calculatePercentCorrect method should calculate and return the percentage of correct guesses', function() {
    round.takeTurn('sea otter');
    expect(round.incorrectGuesses.length).to.equal(0);
    expect(round.calculatePercentCorrect()).to.equal(100);
    round.takeTurn('spleen');
    expect(round.incorrectGuesses.length).to.equal(1);
    expect(round.calculatePercentCorrect()).to.equal(50);
    round.takeTurn('watching Netflix');
    expect(round.incorrectGuesses.length).to.equal(2);
    expect(round.calculatePercentCorrect()).to.equal(33);
  });

  it('should have an endRound method', function() {
    expect(round.endRound).to.be.a('function');
  });

  it('endRound method should print the specific message', function () {
    round.takeTurn('sea otter');
    expect(round.endRound()).to.equal('**Round Over!** You answered 100% of the questions correctly!');
  });

  it('endRound method should display the correct percentage of correct answers', function() {
    round.takeTurn('sea otter');
    expect(round.endRound()).to.equal('**Round Over!** You answered 100% of the questions correctly!');
    round.takeTurn('spleen');
    expect(round.endRound()).to.equal('**Round Over!** You answered 50% of the questions correctly!');
    round.takeTurn('watching Netflix');
    expect(round.endRound()).to.equal('**Round Over!** You answered 33% of the questions correctly!');
  });

});
