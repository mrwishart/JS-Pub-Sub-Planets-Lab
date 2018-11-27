const PubSub = require('../helpers/pub_sub.js');

const MenuView = function () {

};

MenuView.prototype.bindEvents = function () {
  console.log("hello, this is working");

  const menu = document.querySelector(".planets-menu");
  menu.addEventListener('click', (event) => {
    PubSub.publish('Planet:Selected-Planet', event.target.id);
  });
};


module.exports = MenuView;
