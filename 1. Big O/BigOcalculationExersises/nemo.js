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
  for (let i = 0; i < array.length; i++) {
    console.log('Running!');
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }
}

findNemo(everyone);
// const boxes = [0, 1, 2, 3, 4, 5];
// function logFirstTwoBoxes(boxes) {
//   console.log(boxes[0]); // O(1) operation
//   console.log(boxes[1]); // O(1) operation
// }

// logFirstTwoBoxes(boxes); //O(2)
