const strings = ['a', 'b', 'c', 'd']; // 4*4 = 16 bytes of storage

x = strings[2];

//push
strings.push('e'); //O(1) operation - add item at the end of array

//pop
strings.pop(); // remove last item in the array
strings.pop(); // O(1)

//unshift()
strings.unshift('x'); //O(n) because of looping - add x beginning of the array

//splice
strings.splice(2, 0, 'alien'); //O(n)

console.log(strings);
