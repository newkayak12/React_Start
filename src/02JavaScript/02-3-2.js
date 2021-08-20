var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined = {
  one: objectOne.one,
  two: objectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};

var combinedAssign1and2 = Object.assign({}, objectOne, objectTwo);
var combinedAssign2and1 = Object.assign({}, objectTwo, objectOne);
var others1 = Object.assign({}, combinedAssign1and2);
var others2 = Object.assign({}, combinedAssign2and1);

console.log('\n --------객체------------');

console.log(`\nobjectOne : ${objectOne}`);
for (value in objectOne) {
  console.log(`${value} : ${objectOne[value]} `);
}

console.log(`\nobjectTwo: ${objectTwo}`);
for (value in objectTwo) {
  console.log(`${value} : ${objectTwo[value]} `);
}

console.log(`\ncombined : ${combined}`);
for (value in combined) {
  console.log(`${value} : ${combined[value]}`);
}

console.log(`\ncombinedAssign1and2 : ${combinedAssign1and2}`);
for (v in combinedAssign1and2) {
  console.log(`${v} : ${combinedAssign1and2[v]}`);
}

console.log(`\ncombinedAssign2and1 : ${combinedAssign2and1}`);
for (v in combinedAssign2and1) {
  console.log(`${v} : ${combinedAssign2and1[v]}`);
}

console.log(`\nothers1(before delete : ${others1}`);
for (v in others1) {
  console.log(`${v} : ${others1[v]}`);
}
delete others1.other;

console.log(`\nothers1(after delete : ${others1}`);
for (v in others1) {
  console.log(`${v} : ${others1[v]}`);
}

console.log(`\nothers2(before delete : ${others2}`);
for (v in others2) {
  console.log(`${v} : ${others2[v]}`);
}
delete others2.other;

console.log(`\nothers2(after delete : ${others2}`);
for (v in others2) {
  console.log(`${v} : ${others2[v]}`);
}

//ES6 연산자 사용
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined1and2 = {
  ...objectOne,
  ...objectTwo,
};
var combined2and1 = {
  ...objectTwo,
  ...objectOne,
};

var { other, ...others1 } = others1;
var { other, ...others2 } = others2;
console.log(`\n------es6---------`);
console.log(`combined1and2 : ${combined1and2}`);
for (v in combined1and2) {
  console.log(`${v} : ${combined1and2[v]}`);
}

console.log(`\ncombined2and1 : ${combined2and1}`);
for (v in combined2and1) {
  console.log(`${v} : ${combined2and1[v]}`);
}
console.log(`\nother1 : ${others1}`);
for (v in others1) {
  console.log(`${v} : ${others1[v]}`);
}

console.log(`\nother2 : ${others2}`);
for (v in others2) {
  console.log(`${v} : ${others2[v]}`);
}
