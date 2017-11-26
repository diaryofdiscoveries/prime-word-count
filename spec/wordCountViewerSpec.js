describe("WordCountViewer", function() {

  var primeNotifier = jasmine.createSpyObj("primeNotifier", {
    'evaluate': ''
  });

  var wordCountViewer;

  beforeEach(function() {
    wordCountViewer = new WordCountViewer(primeNotifier);
  });

  describe("#display", function(){
    it("returns a relational hash as html", function(){
      var wordHash = { 'hello' : 4, 'goodbye' : 2};
      expect(wordCountViewer.display(wordHash)).toEqual(
        ['<table>',
          '<tr>',
            '<th>WORD</th>',
            '<th>COUNT</th>',
            '<th>PRIME?</th>',
          '</tr>',
          '<tr>',
            '<td>hello</td>',
            '<td>4</td>',
            '<td></td>',
          '</tr>',
          '<tr>',
            '<td>goodbye</td>',
            '<td>2</td>',
            '<td></td>',
          '</tr>',
        '</table>'].join(''));
    });
  });
});
