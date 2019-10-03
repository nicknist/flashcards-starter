const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe ('Turn', function() {

  let card;
  let turn;

  beforeEach( () => {
    card = new Card({id: 1,
      question: `What allows you to define a set of
      related information using key-value pairs?`,
      answers: ['object', 'array', 'function'],
      correctAnswer: 'object'});

    turn = new Turn('pug', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take a user guess and a Card object', function() {
    expect(turn.guess).to.equal('pug');
    expect(turn.card).to.equal(card);
    expect(turn.card.question).to.equal(`What allows you to define a set of
      related information using key-value pairs?`);
    expect(turn.card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(turn.card.correctAnswer).to.equal('object');
  });

  it('should have a returnGuess method', function() {
    expect(turn.returnGuess).to.be.a('function');
  });

  it('returnGuess method should return the user guess', function() {
    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should have a returnCard method', function() {
    expect(turn.returnCard).to.be.a('function');
  });

  it('returnCard method should return the Card object', function() {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should have an evaluateGuess method', function() {
    expect(turn.evaluateGuess).to.be.a('function');
  });

  it(`evaluateGuess should return boolean based on user guess and correctAnswer
    matching`, function() {
    const turnWrong = new Turn('pug', card);
    const turnCorrect = new Turn('object', card);

    expect(turnWrong.evaluateGuess()).to.equal(false);
    expect(turnCorrect.evaluateGuess()).to.equal(true);
  });

  it('should have a giveFeedback method', function() {
    expect(turn.giveFeedback).to.be.a('function');
  });

  it(`giveFeedback method should return a correct or incorrect based on
    correctAnswer and guess matching`, function() {
    const turnWrong = new Turn('pug', card);
    const turnCorrect = new Turn('object', card);

    expect(turnWrong.giveFeedback()).to.equal('Incorrect!');
    expect(turnCorrect.giveFeedback()).to.equal('Correct!');
  });
});
