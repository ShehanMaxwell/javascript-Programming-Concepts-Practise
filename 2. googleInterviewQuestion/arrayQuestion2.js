const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

function containsCommonItems2(arr1, arr2) {
  //loop through first array and create object where properties === items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = array1[i];
      map[item] = true;
    }
  }

  //loops through second array and check if item in second array exists on created object.

  for (let j = 0; j < arr2.length; j++) {
    if (map[array2[j]]) {
      return true;
    }
  }
  return false;
}

// O(a+b) Time complexity
// containsCommonItems2(array1, array2);

// 2nd way of doing this. javascript specific

containsCommonItems2(array1, array2);

function containsCommonItems3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

containsCommonItems3(array1, array2);
