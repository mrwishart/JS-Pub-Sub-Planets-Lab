const PubSub = require('../helpers/pub_sub.js');

const ResultsView = function () {

};

ResultsView.prototype.bindEvents = function () {
  PubSub.subscribe('ResultView:Planet-found', (event) => {
    const section = document.querySelector('.planet-details');
    const planet = event.detail;
    this.renderPlanet(section, planet);
  })
};

ResultsView.prototype.renderPlanet = function (section, planet) {
  section.innerHTML = "";

  const nameElement = document.createElement('h2');
  nameElement.textContent = planet.name;

  const dayElement = document.createElement('p');
  dayElement.textContent = `Day: ${planet.day} Earth days`;

  const orbitElement = document.createElement('p');
  orbitElement.textContent = `Orbit: ${planet.orbit} Earth days`;

  const surfaceAreaElement = document.createElement('p');
  surfaceAreaElement.textContent = `Surface Area: ${planet.surfaceArea} Earths`;

  const volumeElement = document.createElement('p');
  volumeElement.textContent = `Volume: ${planet.volume} Earths`;

  const gravityElement = document.createElement('p');
  gravityElement.textContent = `Gravity ${planet.gravity}g`;

  const imageElement = document.createElement('img');
  imageElement.src = planet.image;
  imageElement.height = 300;
  // imageElement.width = 300;


  section.appendChild(nameElement);
  section.appendChild(dayElement);
  section.appendChild(orbitElement);
  section.appendChild(surfaceAreaElement);
  section.appendChild(volumeElement);
  section.appendChild(gravityElement);
  section.appendChild(imageElement);
};

module.exports = ResultsView;
