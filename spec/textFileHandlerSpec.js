describe("TextFileHandler", function() {

  var fileMock = {};

  var fileReader = jasmine.createSpyObj("fileReader", {
    'result': 'test',
    'readAsText': null
  });

  var textFileHandler;

  beforeEach(function() {
    textFileHandler = new TextFileHandler(fileReader);
  });

  describe("#load", function(){
    it("delegates to the FileReader object", function(){
      textFileHandler.load(fileMock);
      expect(fileReader.readAsText).toHaveBeenCalled();
    });
  });
});
