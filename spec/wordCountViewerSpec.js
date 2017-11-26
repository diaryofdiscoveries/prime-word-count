describe("WordCountViewer", function() {

  var wordCountViewer;

  beforeEach(function() {
    wordCountViewer = new WordCountViewer();
  });

  describe("#display", function(){
    it("returns a relational hash as html", function(){
      var wordHash = { 'hello' : 4, 'goodbye' : 2};
      expect(wordCountViewer.display(wordHash)).toEqual(
        ['<table>',
          '<tr>',
            '<th>WORD</th>',
            '<th>COUNT</th>',
          '</tr>',
          '<tr>',
            '<td>hello</td>',
            '<td>4</td>',
          '</tr>',
          '<tr>',
            '<td>goodbye</td>',
            '<td>2</td>',
          '</tr>',
        '</table>'].join(''));
    });
  });
});
