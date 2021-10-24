function chageVal(primitive, obj) {
  primitive += 100;
  obj.name = 'kim';
}

console.log(chageVal(1, { name: 'paul' }));

var num = 100;
var person = { name: 'lee' };

console.log(num);
console.log(person['name']);

console.log(`chageVal(num, person): ${chageVal(num, person)}`);

console.log(num);
console.log(person['name']);
//객체는 참조에 의해서 전달되기 때문에 훼손된다. 그래서.. 깊은 복사해서 사용하는게 낫다. 
