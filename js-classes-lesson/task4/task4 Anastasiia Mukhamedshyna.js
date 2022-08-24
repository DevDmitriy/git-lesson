import Clock from './task4.js';


class ExtendedClock extends Clock {
  constructor({template, precision=1000}) {
    super({template});
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

let clock = new ExtendedClock({ template: "h:m:s" });
clock.start();
