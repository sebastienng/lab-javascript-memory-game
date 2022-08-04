class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(arrayCards) {
    // ... write your code here
    if(!arrayCards)return undefined;
    return arrayCards.sort( ()=> Math.random()-0.5);
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if(card1===card2){
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    // ... write your code here

    return this.pairsGuessed===this.cards.length/2
  }
}
