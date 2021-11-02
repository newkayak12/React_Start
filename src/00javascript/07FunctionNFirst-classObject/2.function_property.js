//함수 객체의 프로퍼티 
/*
	함수는 객체이다. 따라서 함수도 프로퍼티를 가질 수 있다. 
*/

function square(number){
	return nubmer*number;
}

console.dir(square);
/*
	ƒ square(number)
	arguments: null
	caller: null
	length: 1
	name: "square"
	prototype: {constructor: ƒ}
	[[FunctionLocation]]: VM37:1
	[[Prototype]]: ƒ ()
	[[Scopes]]: Scopes[1]
*/

console.log(Object.getOwnPropertyDescriptors(square));

/*
	{
		length: { value: 1, writable: false, enumerable: false, configurable: true },
		name: {
			value: 'square',
			writable: false,
			enumerable: false,
			configurable: true
  		},
		arguments: {
			value: null,
			writable: false,
			enumerable: false,
			configurable: false
		},
  		caller: {
			value: null,
			writable: false,
			enumerable: false,
			configurable: false
  		},
  		prototype: { value: {}, writable: true, enumerable: false, configurable: false }
	}
*/


// __proto__는 square 함수의 프로퍼티가 아니다.
console.log(Object.getOwnPropertyDescriptors(square,'__proto__'));//undefined
// __proto__는 Object.prototype 객체의 접근자 프로퍼티이다. 


/*
	square 함수는 Object.prototype 객체로부터 __proto__ 접근자 프로퍼티를 상속받는다. 
*/
console.log(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__"));
/*
	{
		get: [Function: get __proto__],
		set: [Function: set __proto__],
		enumerable: false,
		configurable: true
	}

	이처럼 arguments, caller, length, name, prototype프로퍼티는 모두 함수 객체의 데이터 프로퍼티이다. 이들 프로퍼티는 일반객체는 없는 함수 고유 객체 프로퍼티이다. 
	__proto__는 접근자 프로퍼티이며, 함수 객체의 고유프로퍼티가 아니라 Object.prototype 객체의 프로퍼티를 상속받은 것이다. 
*/










//Argument 프로퍼티
/*
	함수 객체의 arguments 프로퍼티 값은 arguments객체이다. arguments객체는 함수 호출 시 전달된 인수들의 정보를 담고 있는 순회 가능한 유사 배결 객체이며, 함수 내부에서 지역변수처럼 사용된다.
	즉, 함수 외부에서는 참조할 수 없다. 

	자바스크립트는 함수의 매개변수와 인수의 개수가 일치하는지 확인하지 않는다. 따라서 호출 시 매개변수 개수만큼 인수를 전달하지 않아도 에러가 발생하지 않는다. 
*/

function multi(x,y){
	console.log(arguments);
	return x*y;
}

console.log(multi()); //NaN
console.log(multi(1)); //NaN
console.log(multi(1,2)); //2
console.log(multi(1,2,3)); //2

/*
	함수를 정의할 때 선언한 매개변수는 함수 몸체 내부에서 변수와 동일하게 취급된다. 즉, 함수가 호출되면 함수 몸체 내에서 암묵적으로 매개변수가 선언되고 undefined로 초기화된 이후 인수가 할당된다. 
	인수가 전달되지 않으면 undefined로 초기화한 상태로 유지된다.
	매개변수보다 더 많이 전달한 경우 초과된 인수는 무시된다. 그렇다고 초과된 인수가 버려지는 것은 아니다. 모든 인수는 암묵적으로 arguments객체의 프로퍼티로 보관된다.

		Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
		0: 1
		1: 2
		2: 3
		callee: ƒ multi(x,y)
		length: 3
		Symbol(Symbol.iterator): ƒ values()
		
	arguments객체는 인수를 프로퍼티 값으로 갖고 프로퍼티 키는 인수의 순서가된다.
	callee는 호출되어 arguments객체를 생성한 함수, 즉 함수 자신을 가리키고 
	arguments객체의 length 프로퍼티는 인수의 개수를 가리킨다.
*/

//arguments객체의 Symbol(Symbol.iterator)프로퍼티
/*
	arguments 객체의 Symbol 프로퍼티는 arguments객체를 순회 가능한 자료구조인 iterable로 만들기 위한 프로퍼티이다.
	Symbol.iterator를 프로퍼티키로 사용한 메소드를 구현하는 것에 의해 이터러블이 된다.
*/

function iterableObj(x,y){
	//이터레이터
	const iterator = arguments[Symbol.iterator]();
	console.log(iterator.next());// {value: 1, done: false}
	console.log(iterator.next());// {value: 2, done: false}
	console.log(iterator.next());// {value: 3, done: false}
	console.log(iterator.next());// {value: undefined, done: true}
	return x*y;
}

iterableObj(1,2,3);

/*
	선언된 매개변수의 개수와 함수를 호출할 떄 전달하는 인수의 개수를 확인하지 않는 자바스크립트의 특성 때문에 함수가 호출되면 인수 개수를 확인하고 이에 따라 함수의 동작을 달리 정의할 필요가 잇을 수 있다. 
	이때 유용하게 사용되는 것이 arguments객체이다.

	arguments객체는 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용하다.
*/

function sum(){
	let res = 0;
	for(let i = 0; i<arguments.length; i++){
		res+=arguments[i]
	}

	//reduce는 Array에서 사용하는데...
	console.log(arguments);

	return res;
}

console.log(sum()); //0
console.log(sum(1,2)); //3
console.log(sum(1,2,3,4)); // 10

//argumetns객체는 배열 형태로 인자 정보를 담고 있지만 실제 배열이 아닌 유사 배열 객체이다. 유사 배열 객체란 length 프로퍼티를 가진 객체로 for문으로 순회할 수 있는 개체를 말한다.
// >> ES6부터 arguments 객체는 유사 배열 객체이면서 동시에 이터러블이다. 
// 유사 배열 객체는 배열이 아니므로 배열 메소드를 사용할 경우 에러가 발생한다. 
// 물론 간접 호출을 통해서 배열처럼 사용할 수는 있다.

function sumArr(){
	const arr = Array.prototype.slice.call(arguments);
	return arr.reduce((pre, cur)=>{
		return pre+cur;
	},0);
}

console.log(sumArr(1,2));//3
console.log(sumArr(1,2,3,4,5));//15

//이러한 번거로움을 타파하기 위해서 ES6에서는 Rest파라미터를 도입했다.

function sumRest(...args){
	return args.reduce((a,c)=>{
		return a+c;
	},0)
}
console.log(sum(1,2)); //3
console.log(sum(1,2,3,4,5)); //15
// >> 자바에서도 지원한다!












//Caller Property
function callerTest(func){
	return func();
}

function test(){
	return "caller : "+ test.caller;
}

// console.log(callerTest(test));

/*caller : function callerTest(func){
	return func();
}*/

// console.log(test());//caller : null
//>> 브라우저 실행 결과

// nodejs는 그냥 js 파일 자체를 읽어들인다. 








//length property
//함수 객체의 length 프로퍼티는 함수를 정의할 때 선언한 매개 변수를 가리킨다.
function lengthTest1(){
	console.log(lengthTest1.length); //0
}

function lengthTest2(x){
	return x;
}
console.log(lengthTest2.length); //1


function lengthTest3(x,y){
	return x*y;
}
console.log(lengthTest3.length); //2

//!단 arguments객체의 length 프로퍼티와 함수 객체의 length 프로퍼티의 값은 다를 수 있다. 
//arguments 객체의 length는 프로퍼티는 인자의 개수를 가리키고 
//function의 length는 매개 변수의 개수를 가리킨다. 








//name property
//기명 함수 표현식
var namedFunc = function vooo(){};
console.log(namedFunc.name); //vooo

//익명 함수 표현식
var anonymousFunc = function(){};
//ES5 >> 빈문자열
//ES6 >> 함수 객체를 가리키는 변수 이름을 값으로 갖는다.
console.log(anonymousFunc.name) // anonymousFunc

//함수 선언문(Function Declaration)
function declaration(){}
console.log(declaration.name); //declaration









//__proto__ 접근자 프로퍼티
/*
	모든 객체는 [[prototype]]이라는 내부 슬롯을 갖는다. [[prototype]] 내부 슬롯은 객체 지향 프로그래밍의 상속을 구현하는 프로토 타입 객체를 가리킨다. 
	__proto__ 프로퍼티는 [[Prototype]] 내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티이다.
	내부 슬롯에는 직접 접근할 수 없고 간접적인 접근 방법을 제공하는 경웨 한하여 접근할 수 있다.
	[[Prototype]]내부 슬롯에도 직접 접근할 수 없으며, __proto__접근자 프로퍼티를 통해 간접적으로 프로토타입 객체에 접근할 수 있다.
*/

const obj = {a:1};
//객체 리터럴 방식으로 생성한 프로토 타입 객체는 Object.prototype이다.
console.log("\n__proto__\n")
console.log(obj.__proto__ === Object.prototype); //true

//객체 리터렁 방식으로 생성한 객체는 프로토타입 객체인 Object.prototype의 프로퍼티를 상속받는다.
//hasOwnProperty 메소드는 Object.prototype의 메소드이다.
console.log(obj.hasOwnProperty('a')); //true
console.log(obj.hasOwnProperty('__proto__'));//false
//hasOwnProperty는 인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티인 경우에만 true를 반환하고 상속 받은 것이라면 false를 반환한다. 








//prototype프로퍼티
//prototype프로퍼티는 생성자 함수로 호출할 수 있는 함수 객체, 즉 constructor만이 소유하는 프로퍼티이다.(non-construct에는 prototype프로퍼티가 없다.)

//함수 객체는 prototype프로퍼티를 소유한다.
(function(){}).hasOwnProperty('prototype');// true

//일반 객체는 prototype 프로퍼티를 소유하지 않는다.
({}).hasOwnProperty('prototype'); //false


/*
	prototype 프로퍼티는 함수가 객체를 생성하는 생성자 함수로 호출될 때 생성자 함수가 생성할 인스턴스의 프로토타입 객체를 가리킨다. 
*/
