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
*/
