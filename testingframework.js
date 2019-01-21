function describe(desc, fn) {
  console.log(desc);
  fn();
}

function it(msg, fn) {
  describe(' ' + msg, fn)
}

function expectToEqual(assertion, expectation) {
  if (assertion === expectation) {
    console.log(`%c Pass - You're a hero!` , 'color: #009200')
    return true
  } else {
    console.log(` %c Fail. Expected: ${expectation}. Got: ${assertion}.`, 'color: #ff0000')
    return false
  }
}

function expectToThrow(assertion, expectation) {
  var error;
  try {
    eval(assertion);
  }
  catch(e) {
    error = e.message
  }
  expectToEqual(error, expectation)
}
