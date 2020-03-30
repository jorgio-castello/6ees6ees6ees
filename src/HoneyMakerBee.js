class HoneyMakerBee extends Bee {
  constructor(age, color, job) {
    super(age, color, job)
    this.honeyPot = 0
  }
  makeHoney() {
    this.honeyPot++
  }
  giveHoney() {
    this.honeyPot--
  }
};
