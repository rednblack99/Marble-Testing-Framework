function describe(desc, fn) {
  console.log(desc);
  fn();
}

function it(msg, fn) {
  describe(' ' + msg, fn)
}