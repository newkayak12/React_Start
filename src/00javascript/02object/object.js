var msg = {
  msgs: 'YJ Pretty',
  sayMsg: () => {
    var ms = this.msgs;
    console.log(`MSG PRINT : ${ms}`);
  },
};
console.log(typeof msg);
console.log(msg);

var circle = {
  radius: 5,
  getDiameter: function () {
    return 2 * this.radius;
  },
};

console.log(circle.getDiameter());
// 프로퍼티 동적 할당

circle.square = 12;

console.log(`circle.square = 12 : ${circle.square}`);

// 프로퍼티 삭제
delete circle.square;

console.log(`circle.square = 12 : ${circle.square}`);

// 프로퍼티 축약
let x = 1,
  y = 2;
const obj = { x, y };
console.log(`obj.x:${obj.x},obj.y:${obj.y}`);

// 프로퍼티 계산 할당

let prefix = 'num';
var i = 0;
var obj2 = {};
obj[prefix + '_' + ++i] = i;
console.log(`obj[prefix+'_'+ (++i)] = i : ${i}`);

obj[prefix + '_' + ++i] = i;
console.log(`obj[prefix+'_'+ (++i)] = i : ${i}`);

obj[prefix + '_' + ++i] = i;
console.log(`obj[prefix+'_'+ (++i)] = i : ${i}`);

obj[prefix + '_' + ++i] = i;
console.log(`obj[prefix+'_'+ (++i)] = i : ${i}`);

//method 선언

const obj3 = {
  name: 'lee',
  sayHi() {
    console.log('hello');
  },
};

console.log(obj3.name);
obj3.sayHi();

characters = {
  str: () => {
    var str = 'string';
    console.log(`str[0] : ${str[0]}`);
    console.log(`str.length : ${str.length}`);
    console.log(`str.toUpperCase() : ${str.toUpperCase()}`);
  },
};
console.log('============char===============');
characters.str();

console.log('\n\n 값에 의한 전달');
v1 = {
  func1: () => {
    var score = 80;
    var copy = score;
    console.log('\n 이전');

    console.log(`score : ${score}`);
    console.log(`copy : ${copy}`);

    console.log(` score === copy : ${score === copy}\n\n`);

    console.log(`\n score =100 >> ${(score = 100)}\n`);

    console.log(`score : ${score}`);
    console.log(`copy : ${copy}`);
    console.log(` score === copy : ${score === copy}\n\n`);
  },
};

v1.func1();

//객체의 특성

console.log('\n\n--------obj------------\n\n\n');
const o = { x: { y: 1 } };
//shallow clone
console.log('\n\n--------shallowclone-----\n\n');
const c1 = { ...o };
console.log(`c1 === o : ${c1 === o}`);
console.log(`c1.x === o.x : ${c1.x === o.x}`);

console.log('\n\n--------deepclone-----\n\n');
const _ = require('lodash');
const c2 = _.cloneDeep(o);
console.log(`c2 === o : ${c2 === o}`);
console.log(`c2.x === o.x : ${c2.x === o.x}`);
