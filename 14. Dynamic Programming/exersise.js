function addTo80(n) {
  console.log('Long Time');
  return n + 80;
}

function memoizedAdd80() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time');
      cache[n] = n + 80;
      return cache[n];
    }
  };
}
const memoized = memoizedAdd80();
console.log(memoized(5));
console.log(memoized(5));
