class RetiredForagerBee extends ForagerBee {
  constructor(age = 40, job = 'gamble', canFly = false, color = 'grey') {
    super(age, job, canFly, color)
  }
  forage() {
    return 'I am too old, let me play cards instead'
  }
  gamble(treasure) {
    this.treasureChest.push(treasure)
  }
};
