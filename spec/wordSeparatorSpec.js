describe("WordSeparator", function() {

  var wordSeparator;

  beforeEach(function() {
    wordSeparator = new WordSeparator();
  });

  describe("#split", function(){
    it("splits up a string of text into an array of individual words", function(){
      var string = 'here are some words';
      expect(wordSeparator.split(string)).toEqual(['here', 'are', 'some', 'words']);
    });

    it("splits a string of text where it sees punctuation or white space", function(){
      var string = 'here, are? some! words:';
      expect(wordSeparator.split(string)).toEqual(['here', 'are', 'some', 'words']);
    });

    it("does not create strings containing punctuation or white space", function(){
      var string = '???   here !!! are some .... words';
      expect(wordSeparator.split(string)).toEqual(['here', 'are', 'some', 'words']);
      expect(wordSeparator.split(string)).not.toContain('???');
    });
  });
});
