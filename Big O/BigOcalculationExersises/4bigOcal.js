// *) 1st Question
function compressBoxesTwice(boxes) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });

  boxes.forEach(function (boxes) {
    console.log(boxes);
  });
}

// runs 2 forEach loops so 2n
// O (2n)
// O (n)   - Dropping n because of constant.
//

// *) 2nd Question
function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });

  boxes.forEach(function (boxes) {
    console.log(boxes);
  });
}

// O(a + b)     - a and b added because of 1st and 2nd input
