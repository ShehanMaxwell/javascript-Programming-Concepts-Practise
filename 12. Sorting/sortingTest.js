const letters = ['a', 'd', 'z', 'e', 'r', 'b'];
const basket = [2, 65, 2, 1, 7, 8];

basket.sort(function (a, b) {
  return a - b;
});

console.log(basket);

// console.log('2'.charCodeAt(0));
// console.log('65'.charCodeAt(0));
// console.log('34'.charCodeAt(0));
// console.log('7'.charCodeAt(0));
