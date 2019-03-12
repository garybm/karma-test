import { romanDisplay } from './../src/main.js';

describe ('string', function() {
  it('should be a string', function(){
    expect(typeof romanDisplay(8)).toEqual('string');
  })
});

var testSymbols =  ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
var testValues = [1, 5, 10, 50, 100, 500, 1000];

describe ('baseValues', function(){
  testSymbols.forEach(function(symbol, index){
    it("Should return " + symbol, function(){
      expect(romanDisplay(testValues[index])).toEqual(symbol);
    });
  });
});

describe ('four', function(){
  it('should return as IV', function() {
    expect(romanDisplay(4)).toEqual('IV');
  })
});

// describe ('symbol', function(){
//   it('should return a I', function(){
//     expect(romanDisplay(1)).toEqual('I');
//   })
//   it('should return a V if the user inputs 5', function(){
//     expect(romanDisplay(5)).toEqual('V');
//   })
