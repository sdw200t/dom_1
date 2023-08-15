import { Hole } from "./mole-game/mole-game.js";

document.addEventListener("DOMContentLoaded", () => {
  const time = 1000;
  const hole = new Hole(document.querySelector(".hole-game"));

  setInterval(() => {
    hole.moveOrc();
  }, time);
});
