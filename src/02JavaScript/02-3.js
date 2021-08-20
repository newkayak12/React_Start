var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combine1 = [array1[0], array1[1], array2[0], array2[1]];
var combine2 = array1.concat(array2);
var combine3 = [].concat(array1, array2);

var first = array1[0];
var second = array1[1];
var three = array1[2] || 'empty';

function func() {
  var args = Array.prototype.slice.call(arguments);
  var first = args[0];
  var others = args.slice(1, args.length);

  console.log(args);
  console.log(first);
  console.log(others);
  //이게 좀 신기하네??? 변수 선언 없이도 그냥 특수 변수로 가져올 수 있다니?
}

console.log('============ 전개 연산자 ==============');
console.log('new array' + combine1);
console.log('used concat' + combine2);
console.log(`first : ${first}`);
console.log(`second : ${second}`);
console.log(`third : ${three}`);

func(1, 2, 3);

// ES6 전개 연산자 사용
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
const combines1 = [...array1, ...array2];

var [first, second, third = 'empty', ...others] = array1;
// ??? 이게 도대체 뭘까요?

function func(...args) {
  var [first, ...others] = args;
  console.log(args);
}
console.log('============ ES6 전개 연산자 ==============');
console.log(`combine1 ${combine1}`);
console.log(`first = ${first}`);
console.log(`second = ${second}`);
console.log(`third = ${third}`);
console.log(`others = ${others}`);
func(array1);
