

//define node module that exports a constructor for creating basic flashcards
// module.exports = BasicCard;

//Constructor to accept 2 arguments: front and back

function FlashCard(front, back) {
  this.front = front;
  this.back = back;
}
//The constructued object should have a 'front' property that contains the text on the front of the ClozeCard

var theBigFive = new FlashCard("The Big Five inlcude...", "Apple, Alphabet, Microsoft, Amazon, Facebook");
var AIleader = new FlashCard("...is the AI research leader of the world", "China");
var hyperLoopOne = new FlashCard("...initiated funding for the Hyperloop One, Mode of transportation moving high speed vehicles through low pressure tubes", "Ellon Musk");

//The constructed object should have a 'back' property that contains the text on the back of the card.

//console log the information
console.log("Front: "+theBigFive.front);
console.log("Back: "+theBigFive.back);
console.log("Front: "+AIleader.front);
console.log("Back: "+AIleader.back);
console.log("Front: "+hyperLoopOne.front);
console.log("Back: "+hyperLoopOne.back);
