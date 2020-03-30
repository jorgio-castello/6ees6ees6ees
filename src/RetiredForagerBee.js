class RetiredForagerBee extends ForagerBee {
  constructor(age, color, job, canFly) {
    super(age, color, job, canFly)
  }
  forage() {
    return 'I am too old, let me play cards instead'
  }
  gamble(treasure) {
    this.treasureChest.push(treasure)
  }
};
