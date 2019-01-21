describe('Square', function() {

  let square = new Square(5);

  it('can get the square of a number', function() {
    expectToEqual(square.area(), 25);
  });

  it('throws an error if argument is not a number', function() {
    var error = null;
    try {
      new Square("cat")
    }
    catch(e){
      error = e.message
    }
    expectToThrow(error, 'argument is not a number')
  });

  it('throws an error if passed a negative number', function() {
    var error = null;
    try {
      new Square(-4)
    }
    catch(e){
      error = e.message
    }
    expectToThrow(error, 'size should be a positive number')
  });
});
