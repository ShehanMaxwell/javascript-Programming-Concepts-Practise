function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log('hi');
  }
}

// O(1 + n/2 + 100)
// O(n/2 + 101)
// O(n/2 + 1)    - 101 turns "1" because of big O chart.
// O(n + 1)      - In the grand scheme of things. we drop constants.
// O (n)         - Because +1 is so incignificent we drop that too.
