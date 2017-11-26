describe("PrimeNotifier", function() {

  var primeNotifier;

  beforeEach(function() {
    primeNotifier = new PrimeNotifier();
  });

  describe("#evaluate", function(){
    it("returns 'Prime' if the number is a prime", function(){
      var prime = 7;
      var prime2 = 199;
      expect(primeNotifier.evaluate(prime)).toEqual('Prime');
      expect(primeNotifier.evaluate(prime2)).toEqual('Prime');
    });

    it("returns '' if the number is not a prime", function(){
      var prime = 4;
      expect(primeNotifier.evaluate(prime)).toEqual('');
    });
  });
});
