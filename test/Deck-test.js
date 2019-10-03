const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe ('Deck', function() {

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck([]);

    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be initialized with an array of card objects', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?',
      ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);

    expect(deck.cards[0]).to.equal(card1);
    expect(deck.cards[1]).to.equal(card2);
    expect(deck.cards[2]).to.equal(card3);
  });

  it('should have a countCards method', function() {
    const deck = new Deck([]);

    expect(deck.countCards).to.be.a('function');
  });

  it('countCards method should return length of deck array', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?',
      ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);

    expect(deck.countCards()).to.equal(3);
  });
});
