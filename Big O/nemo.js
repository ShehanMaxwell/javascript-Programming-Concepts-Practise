const nemo = ['nemo'];
const { performance } = require('perf_hooks');
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
  'max',
];
const large = new Array(100).fill('nemo');
function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
  let t1 = performance.now();
  console.log('Call to find Nemo took ' + (t1 - t0) + 'milliseconds');
}

findNemo(large);
