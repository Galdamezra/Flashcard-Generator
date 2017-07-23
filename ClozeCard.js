
var prototypes = require("prototypes");

//define node module that exports a constructor for creating cloze-deletion flashcards
// module.exports = ClozeCard;

//Constructor to accept 2 arguments: text and cloze

function ClozeFlashCard(cloze, partial, fullText) {
  this.cloze = cloze;
  this.partial = partial;
  this.fullText = fullText;
}

var BigFive = "The Big Five inlcude Apple, Alphabet, Microsoft, Amazon, Facebook";
var AIleader = "China is the AI research leader of the world";
var hyperLoopOne = "Ellon Musk initiated funding for the Hyperloop One, Mode of transportation moving high speed vehicles through low pressure tubes";
var ClozeError = "Oops this does not work";


//the constructed object should have a 'cloze' property that contains _only_
//the cloze-deletion portion of text
//the constructued object should have a 'partial' property that contains _only_  the partial text
//the constructued object should have a 'fullText' property that contains _only_ the full text

var theBigFive = new ClozeFlashCard("Apple, Alphabet, Microsoft, Amazon, Facebook", "The Big Five inlcude...", BigFive);
var theAIleader = new ClozeFlashCard("China",
"...is the AI research leader of the world",
AIleader);
var thehyperLoopOne = new ClozeFlashCard("Ellon Musk",
"...initiated funding for the Hyperloop One, Mode of transportation moving high speed vehicles through low pressure tubes",
hyperLoopOne);

//the constructor should throw or log an error when the cloze deletion does _not_ appear in the input text
var brokenCloze = new ClozeFlashCard("Oops",
"this does not work",
ClozeError);

//use prototypes to attach these methods, wherever possible
console.log("Cloze: "+theBigFive.cloze);
console.log("Partial: "+theBigFive.partial);
console.log("Full Text: "+theBigFive.fullText);

console.log("Cloze: "+theAIleader.cloze);
console.log("Partial: "+theAIleader.partial);
console.log("Full Text: "+theAIleader.fullText);

console.log("Cloze: "+thehyperLoopOne.cloze);
console.log("Partial: "+thehyperLoopOne.partial);
console.log("Full Text: "+thehyperLoopOne.fullText);

console.log("Error: "+brokenCloze.fullText);

var userInput = "CHINA";

var AIchina = theAIleader.cloze;

var check = AIchina.containsIgnoreCase(userInput);
console.log("User Input is: "+check);
// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze = new ClozeCard("This doesn't work", "oops"
