function addTo80(n) {
  console.log('Long Time');
  return n + 80;
}

let cache = {};
function memoizedAdd80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log('long time');
    cache[n] = n + 80;
    return cache[n];
  }
}

console.log(memoizedAdd80(5));
console.log(memoizedAdd80(8));
console.log(memoizedAdd80(8));
