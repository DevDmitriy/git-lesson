// Create a new class ExtendedClock that inherits from Clock and adds the parameter precision – the number of ms between “ticks”. Should be 1000 (1 second) by default.

// Your code should be in the file extended-clock.js
// Don’t modify the original clock.js. Extend it.

import {Clock} from './task4'

class ExtendedClock extends Clock {
    constructor({template}, precision = 1000) {
    super({template});
    this.precision = precision;
  }
  
}

let newClock = new ExtendedClock({template: 'h:m:s'}, 2000);
newClock.start();

