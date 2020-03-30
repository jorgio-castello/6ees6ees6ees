class Bee extends Grub {
  constructor(age = 5, job, color = 'yellow') {
    super(age, color)
    this.job = job || 'Keep on growing'
  }
};
