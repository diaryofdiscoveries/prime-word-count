(function(exports){

  function PrimeNotifier() {
  }

  PrimeNotifier.prototype.evaluate = function(number) {
      for(var i = 2; i < number; i++) {
        if(number % i === 0) {return '';}
      }
      if(number !== 1) {return 'Prime';} else { return ''; }
  };

  exports.PrimeNotifier = PrimeNotifier;
})(this);
