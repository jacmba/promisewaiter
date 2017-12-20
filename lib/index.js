'use strict';

/**
 * Wait method with promises
 * 
 * @author Jacinto Mba Cantero
 * @since 12/20/2017
 * 
 * @param {integer} millis - Number of milliseconds to wait
 * @returns {Promise}
 */
function wait(millis) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() =>{
        resolve();
      }, millis);
    } catch(e) {
      reject(e);
    }
  });
}

module.exports = wait;