'use strict';

let assert = require('assert');
let wait = require('../lib');

describe('Simple syncwaiter test', () => {
  it('Should have ellapsed 1500 milliseconds', (done) => {
    let now = new Date().getTime();
    wait(1500)
    .then(() => {
      let after = new Date().getTime();
      let diff = after - now;
      assert(diff >= 1500 && diff <1600);
      done();
    });
  });
});