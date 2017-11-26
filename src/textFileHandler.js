(function(exports){

  function TextFileHandler(fileReader) {
    this._text = "";
    this.fileReader = fileReader;
  }

  TextFileHandler.prototype.load = function(file) {
    var self = this;
    var reader = this.fileReader;
    reader.onload = function(){
      self._text = reader.result;
    };
    reader.readAsText(file);
  };

  TextFileHandler.prototype.text = function() {
    return this._text;
  };

  exports.TextFileHandler = TextFileHandler;
})(this);
