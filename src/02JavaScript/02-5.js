/* 

>>>> Chrome console >>>>


function add(first, second){
    return first + second;
}

>_ add

result : 
		ƒ add(first, second){
			return first + second;
		}



var add = function (first, second){
    return first+second;
};



>_ add
result : 

		ƒ (first, second){
			return first+second;
		}
*/

// 화살표 함수로 표현하자

var add = (first, second) => {
  return first + second;
};

var add = (first, second) => first + second;

var addAndMultiple = (first, second) => ({ add: first + second, multiply: first * second });

console.log(`\n=== 화살표 함수 ===`);
console.log(`add(100,200) : ${add(100, 200)}`);
console.log(`addAndMultiple(10, 20).add : ${addAndMultiple(10, 20).add}`);
console.log(`addAndMultiple(10, 20).multiply : ${addAndMultiple(10, 20).multiply}`);

// 계단 함수 화살표 함수로 간결화

function addNumber(num) {
  return function (value) {
    return num + value;
  };
}
console.log(`계단 함수`);
console.log(`addNumber(10)(20) : ${addNumber(10)(20)}`);
//  화살표로 선언하면 ?? var addNumber = (num) => (value) => num + value;

//bind() 함수로 this 객체를 전달

class MyClass {
  value = 10;
  constructor() {
    var addThis2 = function (first, second) {
      return this.value + first + second;
    }.bind(this);

    var addThis3 = (first, second) => this.value + first + second;
  }
}

let cls = new MyClass();
console.log(`\n bind(this)`);
// console.log(`cls.addThis2(1,2) : ${cls.addThis2(1, 2)}`);
// console.log(`cls.addThis3(2,3) : ${cls.addThis3(2, 3)}`);
// 어떻게 해야 호출할 수 있을까.. 흠.. 자바로 해볼까?
