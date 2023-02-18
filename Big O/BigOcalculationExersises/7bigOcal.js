function booooo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('booooooo!');
  }
}

booooo([1, 2, 3, 4, 5]); // space complexicity is 0(1). Because "let i = o" varaiable is the only thing thats inside thr function. we dont care about the output.

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }
  return hiArray;
}

arrayOfHiNTimes(6); // space complexicity is O(n)
