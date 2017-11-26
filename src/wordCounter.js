(function(exports){

  function WordCounter() {
  }

  WordCounter.prototype.count = function(wordArray){
      var countHash = {};
      wordArray.forEach(function(word) {
        if(countHash.hasOwnProperty(word.toLowerCase())) {
          countHash[word.toLowerCase()] ++;
        } else {
          countHash[word.toLowerCase()] = 1;
        }
      });
      return countHash;
  };

  exports.WordCounter = WordCounter;
})(this);
