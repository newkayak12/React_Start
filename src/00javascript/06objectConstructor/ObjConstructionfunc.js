// new 연산자와 함께 Obj 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다. 빈 객체를 생성한 이후 프로퍼티 또는 메소드를 추가하여 객체를 완성할 수 있다.

// 빈 객체 생성
const person = new Object();

// 프로퍼티 추가
person.name = 'Lee';
person.sayHello = function(){
	console.log('Hi! My name is '+this.name);
};

console.log(person); //{name:"Lee",sayHello:f}
person.sayHello(); // Hi! My name is Lee

//생성자 함수란 new 연산자와 함께 호출하여 객체를 생성하는 함수를 말한다.
//생성자 함수에 의해 생성된 객체를 인스턴스라고 한다.
//자바스크립트는 Object 생성자 함수 이외에도 String, Number, Boolean, Function, Array, Date, RegExp, Promise등의 빌트인 생성자 함수를 제공한다.

//String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Lee');
console.log(typeof strObj); //Object
console.log(strObj); // String {"Lee"}

//Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123);
console.log(typeof numObj); //Object
console.log(numObj); //Number {123}

//Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true);
console.log(typeof boolObj); //object
console.log(boolObj) // Boolean {true}

//Function 생성자 함수에 의한 function 객체(함수) 생성
const func = new Function('x', 'return x*x');
console.log(typeof func); //function
console.dir(func); //f anonymous(x)

//Array 생성자 함수에 의한 Array 객체(배열) 생성
const arr = new Array(1,2,3);
console.log(typeof arr); //object
console.log(arr); //[1,2,3]

//RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp); //object
console.log(regExp) // /ab+c/i

//Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();
console.log(typeof date); //object
console.log(date) //Mon May 04.....



//생성자 함수
// 객체 리터럴에 의한 객체 생성 방식의 문제점