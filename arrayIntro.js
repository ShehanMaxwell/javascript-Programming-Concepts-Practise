const strings = ['a', 'b', 'c', 'd']; // 4*4 = 16 bytes of storage

x = strings[2];

//push
strings.push('e'); //O(1) operation

//pop
strings.pop();
strings.pop(); // O(1)

console.log(strings);
