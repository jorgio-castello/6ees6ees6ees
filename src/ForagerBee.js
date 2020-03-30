class ForagerBee extends Bee {
  constructor(age = 10, job = 'find pollen', canFly = true, color) {
    super(age, job, color)
    this.canFly = canFly
    this.treasureChest = []
  }
  forage(treasure) {
    this.treasureChest.push(treasure)
  }
};
