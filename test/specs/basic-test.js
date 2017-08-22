var assert = require('assert');

describe('Loader Simulation', function() {
  before(function() {
    browser.url('http://localhost:9090');
  });

  it('has at least 2 loaders', function() {
    var progressElements = browser.elements('.progress');
    assert(progressElements.value.length >= 2);
  });

  it('has at least 2 buttons', function() {
    var buttonElements = browser.elements('button');
    assert(buttonElements.value.length >= 2);
  });
});