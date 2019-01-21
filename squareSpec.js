describe('Square', function() {

  let square = new Square(5);

  it('can get the square of a number', function() {
    expectToEqual(square.area(), 25);
  });
});
