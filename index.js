/* jshint browserify: true */
var simulateProgress = require('simulate-progress');

function startSimulation(loaderEl) {
  loaderEl.classList.remove('finished');
  var progressEl = loaderEl.querySelector('.progress');

  function progressCallback(percent) {
    progressEl.style.width = percent + '%';
  }

  function finishCallback() {
    loaderEl.classList.add('finished');
  }

  progressEl.style.width = '0%';
  simulateProgress(progressCallback, finishCallback);
}

document.querySelectorAll('button').forEach(function(buttonElement) {
  buttonElement.addEventListener('click', function() {
    startSimulation(buttonElement.parentNode.querySelector('.loader'));
  });
});