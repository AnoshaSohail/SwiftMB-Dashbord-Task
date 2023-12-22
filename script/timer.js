
var countdownNumberEl = document.getElementById('countdown-number');
var countdownCircleEl = document.getElementById('countdown-circle');
var countdown = 1;

// Initial setup
countdownNumberEl.textContent = countdown;
updateAnimation();

// Set up event listener for the dropdown change
document.getElementById('time-duration').addEventListener('change', function () {
  countdown = getSelectedCountdown();
  countdownNumberEl.textContent = countdown;
  updateAnimation();
});

// Update countdown and animation every second
setInterval(function () {
  countdown = --countdown <= 0 ? getSelectedCountdown() : countdown;
  countdownNumberEl.textContent = countdown;
  updateAnimation();
}, 1000);

// Function to get the selected countdown from the dropdown
function getSelectedCountdown() {
  var selectedOption = document.getElementById('time-duration').value;
  switch (selectedOption) {
    case '30s':
      return 30;
    case '2m':
      return 120;
    case '5m':
      return 300;
    default:
      return 1; // Default value for 'once'
  }
}

// Function to update the animation duration
function updateAnimation() {
  var animationDuration = getSelectedCountdown() + 's';
    countdownCircleEl.style.animationDuration = countdown + 's';
}