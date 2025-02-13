// script.js
const lights = document.querySelectorAll('.light');
let currentLight = 0;

function changeLight() {
  // Turn off all lights
  lights.forEach(light => light.classList.remove('active'));

  // Turn on the current light
  lights[currentLight].classList.add('active');

  // Move to the next light
  currentLight = (currentLight + 1) % lights.length;
}

// Change the light every 2 seconds (2000 milliseconds)
setInterval(changeLight, 2000);

// Initialize the first light
changeLight();