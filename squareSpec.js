describe('Square', function() {

  let square = new Square(5);

  it('can get the square of a number', function() {
    expectToEqual(square.area(), 25);
  });

  it('throws an error if argument is not a number', function() {
    expectToThrow("new Square('cat')", 'argument is not a number')
  });

  it('throws an error if passed a negative number', function() {
    expectToThrow("new Square(-4)", 'size should be a positive number')
  });
});
