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
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}

findNemo(everyone);

//optional loop method 2
const findNemo2 = (array) => {
  array.forEach((fish) => {
    if (fish === 'nemo') {
      console.log('Found NEMO!');
    }
  });
};

//optional loop method 3
const findNemo3 = (array) => {
  for (let fish of array) {
    if (fish === 'nemo') {
      console.log('Found NEMO!');
    }
  }
};

findNemo2(everyone);
findNemo3(everyone);
