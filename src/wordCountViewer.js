(function(exports){

  function WordCountViewer() {
  }

  WordCountViewer.prototype.display = function(hash) {
      var wordhtml = '';
      var headerhtml = '<table><tr><th>WORD</th><th>COUNT</th></tr>';
      for (var [word, count] of Object.entries(hash)) {
        wordhtml += `<tr><td>${word}</td><td>${count}</td></tr>`;
      }
      return headerhtml + wordhtml + '</table>';
  };

  exports.WordCountViewer = WordCountViewer;
})(this);
