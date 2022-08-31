// Solution
import { Clock } from "./task4.js";

class ExtendedClock extends Clock {
  constructor(obj) {
    super(obj);
    let { precision = 1000 } = obj;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}
