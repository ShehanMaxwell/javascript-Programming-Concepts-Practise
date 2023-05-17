let counter = 0;
function inception() {
  if (counter > 3) {
    return 'done!';
  }
  counter++;
  inception();
  console.log('You are a WINNER!!');
}

inception();

console.log(inception());
