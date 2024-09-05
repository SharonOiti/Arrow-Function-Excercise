//1. ES5 Map Callback Refactored to ES2015
//Original ES5 code:
function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

  //Refactored ES2015 one-liner:
  const double = arr => arr.map(val => val * 2);

  //2. Replace ALL Functions with Arrow Functions
  //Original ES5 code:
  function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

  //Refactored ES2015 version:
  const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);