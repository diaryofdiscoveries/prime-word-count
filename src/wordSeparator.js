(function(exports){

  function WordSeparator() {
  }

  WordSeparator.prototype.split = function(textString) {
      return textString.match(/[a-zA-Z]+/g); // returns an array of single words
  };

  exports.WordSeparator = WordSeparator;
})(this);
