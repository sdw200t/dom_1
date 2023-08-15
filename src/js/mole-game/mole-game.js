export class Hole {
  constructor(element) {
    this.boomOrc = this.boomOrc.bind(this);

    this._element = element;
    this.holeAll = element.querySelectorAll(".hole");
    this.place = 1;
    this.newPlace = 1;

    this.dead = document.querySelector(".dead");
    this.lost = document.querySelector(".lost");

    this._element.addEventListener("click", this.boomOrc);
  }

  moveOrc() {
    while (this.newPlace == this.place) {
      this.newPlace = Math.floor(1 + Math.random() * 16);
    }

    this._element
      .querySelector(".hole_has-mole")
      .classList.remove("hole_has-mole");
    this.holeAll[this.newPlace - 1].classList.add("hole_has-mole");
    this.place = this.newPlace;
  }

  boomOrc(e) {
    const target = e.target;
    if (target.classList.contains("hole_has-mole")) {
      this.dead.textContent = Number(this.dead.textContent) + 1;
    } else {
      this.lost.textContent = Number(this.lost.textContent) + 1;
      if (this.lost.textContent == "5") {
        this.dead.textContent = "0";
        this.lost.textContent = "0";
        this.moveOrc();
        alert("Вы проиграли");
      }
    }
  }
}
