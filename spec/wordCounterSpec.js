describe("WordCounter", function() {
  beforeEach(function() {
    wordCounter = new WordCounter();
  });

  describe("#count", function(){
    it("counts the occurrence of individual words in an array, returning a hash of results", function(){
      var wordArray = ['Hello', 'hello', 'Hello', 'Hello', 'Goodbye', 'goodbye'];
      expect(wordCounter.count(wordArray)).toEqual({ 'hello' : 4, 'goodbye' : 2});
    });

    it("ignores capitalisation by converting all words into lowercase in results hash", function(){
      var wordArray = ['Hello', 'hello', 'Hello', 'Hello', 'Goodbye', 'goodbye'];
      expect(wordCounter.count(wordArray)).not.toEqual({ 'Hello' : 3, 'hello' : 1, 'Goodbye' : 1, 'goodbye' : 1});
    });
  });
});
