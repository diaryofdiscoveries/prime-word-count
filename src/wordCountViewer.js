(function(exports){

  function WordCountViewer(primeNotifier) {
    this.primeNotifier = primeNotifier;
  }

  WordCountViewer.prototype.display = function(countHash) {
      var wordhtml = '';
      var headerhtml = '<table><tr><th>WORD</th><th>COUNT</th><th>PRIME?</th></tr>';
      for (var [word, count] of Object.entries(countHash)) {
        var prime = this.primeNotifier.evaluate(count);
        wordhtml += `<tr><td>${word}</td><td>${count}</td><td>${prime}</td></tr>`;
      }
      return headerhtml + wordhtml + '</table>';
  };

  exports.WordCountViewer = WordCountViewer;
})(this);
