var Letter = require("./letter")
function Word(word) {
    console.log(word);
    var splitWord = word.split(" "); // Issue with split
    var wordArray = [];
    splitWord.forEach(function(element){
        var letter = new Letter(element);
        wordArray.push(letter);
    })
    this.stringWord = word;
    this.word = wordArray;
    this.wordDisplay = function(){
        var display = [];
        this.word.forEach(function(element){
            display.push(element);            
        })
        return display;
    }
    this.guess = function(letter){
        var found = false;
        this.word.forEach(function(element){
            if(element.check(letter)){
                found = true;
            }
        })
        return found;
    }
}
module.exports = Word;