var assert = require('assert');
describe('Loader Simulation', function() {
  before(function() {
    browser.url('http://localhost:8080');
  });

  it('has at least', function() {
    var progressElements = browser.elements('.progress');
    console.info('progressElements', progressElements);
    assert.equal(progressElements.value.length, 2);
  });
});