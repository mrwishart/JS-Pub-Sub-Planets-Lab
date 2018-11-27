const PubSub = require('../helpers/pub_sub.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('Planet:Selected-Planet', (event) => {
    const planetName = event.detail;
    const foundPlanet = this.findPlanetDetails(planetName);
    PubSub.publish('ResultView:Planet-found', foundPlanet);
  });
};

SolarSystem.prototype.findPlanetDetails = function (name) {
  return this.planets.find( function(planet) {
    return planet.name === name;
  });
};

module.exports = SolarSystem;
