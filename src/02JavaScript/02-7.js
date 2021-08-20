var x = 0;
var y = 0;
var obj = { x: x, y: y };
var randomKeyString = 'other';
var combined = {};

combined['one' + randomKeyString] = 'some value';
var obj2 = {
  x: x,
  methodA: function () {
    console.log('method A');
  },
  methodB: function () {
    return 0;
  },
};
console.log('------ ES6 이전 ------');
console.log(`x : ${x}`);
console.log(`y : ${y}`);
for (v in obj) {
  console.log(`${v} : ${obj[v]}`);
}

console.log(`randomKeyString : ${randomKeyString}`);
console.log(`combined : ${combined}`);
for (v in combined) {
  console.log(`${v} : ${combined[v]}`);
}

console.log(`obj2 : ${obj2}`);

console.log(`obj2.x : ${obj2.x}`);
obj2.methodA();
console.log(`obj2.methodB() : ${obj2.methodB()}`);

//ES6 개선

var x = 0;
var y = 0;
var obj = { x, y };
var randomKeyString = 'other';
var combined = {
  ['one' + randomKeyString]: 'some value',
};

var obj2 = {
  x,
  methodA() {
    console.log('method A');
  },
  methodB() {
    return 0;
  },
};
console.log('------ ES6 -------');
console.log(`x : ${x}`);
console.log(`y : ${y}`);
for (v in obj) {
  console.log(`${v} : ${obj[v]}`);
}

console.log(`randomKeyString : ${randomKeyString}`);
console.log(`combined : ${combined}`);
for (v in combined) {
  console.log(`${v} : ${combined[v]}`);
}

console.log(`obj2 : ${obj2}`);

console.log(`obj2.x : ${obj2.x}`);
obj2.methodA();

console.log(`obj2.methodB() : ${obj2['methodB']}`);
console.log(`obj2.methodB() : ${obj2.methodB()}`);

//기존 자바스크립트 구조 분해

var list = [0, 1];
var item1 = list[0];
var item2 = list[1];
var item3 = list[2] || -1;

console.log('\n== 기존 자바스크립트 ==');
console.log('\n -- 배열 변경 전 --');
console.log(`item1 : ${item1}`);
console.log(`item2 : ${item2}`);
console.log(`item3 : ${item3}`);

var temp = item2;
item2 = item1;
item1 = temp;

var obj = {
  key1: 'one',
  key2: 'two',
};

var key1 = obj.key1;
var key2 = obj.key2;
var key3 = obj.key3 || 'default key3 value';
var newKey1 = obj.key1;

console.log(`list : ${list}`);
console.log('\n -- 배열 변경 후 --');
console.log(`item1 : ${item1}`);
console.log(`item2 : ${item2}`);
console.log(`item3 : ${item3}`);

for (v in obj) {
  console.log(`${v} : ${obj[v]}`);
}

console.log(`key1 : ${key1}`);
console.log(`key2 : ${key2}`);
console.log(`key3 : ${key3}`);
console.log(`newKey1 : ${newKey1}`);

//ES6 구조 분해

var list = [0, 1];

var [item1, item2, item3 = -1] = list;

console.log(`-- ES6 _ 배열 변경 전 --`);
console.log(`list['item1'] : ${list[item1]}`);
console.log(`list['item2'] : ${list[item2]}`);
console.log(`list['item3'] : ${list[item3]}`);

// [item2, item1] = [item1, item2];
// 안되는데...
console.log(`-- ES6 _ 배열 변경 후 --`);
console.log(`list['item1'] : ${list[item1]}`);
console.log(`list['item2'] : ${list[item2]}`);
console.log(`list['item3'] : ${list[item3]}`);

var obj = {
  key1: 'one',
  key2: 'two',
};
console.log('obj 변형 전');
for (v in obj) {
  console.log(`${v} : ${obj[v]}`);
}
console.log('\n');

var { key1: newKey1, key2, key3 = 'default key3 value' } = obj;
console.log('obj 변형 후');
for (v in obj) {
  console.log(`${v} : ${obj[v]}`);
}

var [item1, ...otherItems] = [0, 1, 2];
var { key1, ...others } = { key1: 'one', key2: 'two' };
console.log(otherItems);
console.log(others);
