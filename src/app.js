const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const MenuView = require('./views/menu_view.js');
const ResultsView = require('./views/results_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);
  planetsDataModel.bindEvents();

  const menuView = new MenuView();
  menuView.bindEvents();

  const resultsView = new ResultsView();
  resultsView.bindEvents();

});
