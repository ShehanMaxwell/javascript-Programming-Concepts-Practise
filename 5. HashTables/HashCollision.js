let user = {
  age: 29,
  name: 'Kylie',
  magic: true,
  scream: function () {
    console.log('TO WARRRRRRRRRR!');
  },
};

console.log(user.age); //O(1)
user.spell = 'ALAHAMORA!'; //O(1)

console.log(user);

console.log(user.scream()); //O(1)
