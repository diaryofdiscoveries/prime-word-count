var fileReader = new FileReader();
var textFileHandler = new TextFileHandler(fileReader);
var wordSeparator = new WordSeparator();
var wordCounter = new WordCounter();
var wordCountViewer = new WordCountViewer();

var execute = function() {
  var output = document.getElementById('output');
  var textString = textFileHandler.text();
  var wordArray = wordSeparator.split(textString);
  var countHash = wordCounter.count(wordArray);
  var html = wordCountViewer.display(countHash);
  output.innerHTML = html;
};
