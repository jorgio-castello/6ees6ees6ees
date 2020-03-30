class ForagerBee extends Bee {
  constructor(age, color, job, canFly) {
    super(age, color, job)
    this.canFly = canFly
    this.treasureChest = []
  }
  forage(treasure) {
    this.treasureChest.push(treasure)
  }
};
