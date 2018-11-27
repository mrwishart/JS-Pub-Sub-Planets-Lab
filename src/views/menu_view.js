const PubSub = require('../helpers/pub_sub.js');

const MenuView = function () {

};

MenuView.prototype.bindEvents = function () {


  const menu = document.querySelector(".planets-menu");
  menu.addEventListener('click', (event) => {
    if (event.target === menu) {
      return;
    }

    PubSub.publish('Planet:Selected-Planet', event.target.id);
  });
};


module.exports = MenuView;
