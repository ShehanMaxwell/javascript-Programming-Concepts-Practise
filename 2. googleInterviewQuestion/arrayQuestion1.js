/* 

~Question~

1) Give 2 arrays, create a function that let's user know (true/false)
   whether these two arrays contain any common items.

   for example:

   const array1 = ['a', 'b', 'c', 'x' ];
   const array2 = ['z', 'y', 'i' ];
   should return false.
   ------------------------------------------
   const array1 = ['a', 'b', 'c', 'x' ];
   const array2 = ['z', 'y', 'x' ];
   should return true.

   // 2 parameters - arrays - no size limit
   // return true or false

*/
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'a'];

// function containsCommonItem(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(containsCommonItem(array1, array2));

//O(a*b) Time complexity

// another method---------------------------------
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

/*

array1 ===> obj {
    a: true,
    b: true,
    c: true,
    x: true
}

array2[index] === obj.properties


*/

function containsCommonItems2(arr1, arr2) {
  /* 
    1) loops through first array and create object where
    properties === items in the array

    2) loops through second array and check if item in second
       array exists on created object.


       O(a+b)
    
    */
}
