function describe(desc, fn) {
  console.log(desc);
  fn();
}

function it(msg, fn) {
  describe(' ' + msg, fn)
}

function expectToEqual(assertion, expectation) {
  if (assertion === expectation) {
    console.log("Pass - You're a hero!")
    return true
  } else {
    console.log("Fail")
    return false
  }
}
