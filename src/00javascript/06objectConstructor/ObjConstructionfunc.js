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
 
const circle1 = {
	radius:5,
	getDiameter(){
		return 2*this.radius
	}
}
console.log(circle1.getDiameter()); //10

const circle2 = {
	radius:10,
	getDiameter(){
		return 2*this.radius;
	}
}
console.log(circle1.getDiameter()); //20

/*
	객체는 프로퍼티를 통해 객체 고유 상태를 표현한다. 그리고 메소드를 통해 상태 데이터인 프로퍼티를 참조하고 조작하는 동작을 표현한다.
	따라서 프로퍼티는 객체마다 프로퍼티 값이 다를 수 있지만 메서드는 내용이 동일한 경우가 일반적이다. 

	위와 같이 중복되는 내용이 많아진다.
*/



//생성자 함수에 의한 객체 생성 방식의 장점
function Circle(raduis){
	//생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
	this.radius = raduis;
	this.getDiameter = function(){
		return 2*this.radius;
	};

}

//인스턴스 생성
const circle3 = new Circle(5);
const circle4 = new Circle(10);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());

console.log("\n인스턴스 생성\n")
console.log(circle3)

/*
	this는 객체 자신의 프로퍼티나 메소드를 참고하기 위한 자기 참조 변수이다. this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다. 

		함수 호출 방식		this가 가리키는 값(this 바인딩)
	      일반 함수로서 호출		전역객체
	      메소드로서 호출		메소드를 호출한 객체(마침표 앞의 객체)
	      생성자 함수로서 호출	 생성자 함수가 (미래에) 생성할 인스턴스

*/

// 함수는 다양한 방식으로 호출될 수 있다.
function foo(){
	console.log(`\nthis를 찍어보면`)
	console.log(this);

}

// 일반적인 함수로서 호출
// 전역 객체는 브라우저 환경에서는 window, Node.js 환경에서는 global을 가리킨다.
foo(); //window

const obj = {foo};

/*
	<ref *1> Object [global] {
		global: [Circular *1],
		clearInterval: [Function: clearInterval],
		clearTimeout: [Function: clearTimeout],
		setInterval: [Function: setInterval],
		setTimeout: [Function: setTimeout] {
		[Symbol(nodejs.util.promisify.custom)]: [Getter]
		},
		queueMicrotask: [Function: queueMicrotask],
		performance: Performance {
		nodeTiming: PerformanceNodeTiming {
		name: 'node',
		entryType: 'node',
		startTime: 0,
		duration: 31.81539799971506,
		nodeStart: 1.7869629999622703,
		v8Start: 2.5810940000228584,
		bootstrapComplete: 21.479803000111133,
		environment: 12.371538999956101,
		loopStart: -1,
		loopExit: -1,
		idleTime: 0
		},
		timeOrigin: 1635512010953.525
		},
		clearImmediate: [Function: clearImmediate],
		setImmediate: [Function: setImmediate] {
		[Symbol(nodejs.util.promisify.custom)]: [Getter]
		}
		}

*/
// 메소드로서 호출
obj.foo(); //obj

//생성자 함수로서 호출
const inst = new foo(); //inst



//생성자 함수는 이름 그대로 객체(인스턴스)를 생성하는 함수이다. 자바와 다르게 자바스크립트는 그 형식이 정해진 것이아니라 일반 함수와 동일한 방법으로 생성자를 정의하고
//new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다. new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수가 아니라 일반 함수로 동작된다. 
//ex)

//new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않는다.
//즉, 일반 함수로서 호출된다.

const circle5 = Circle(15);

//일반함수로서 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환한다.
console.log(circle5); // undefined

// 일반 함수로서 호출된 Circle내의 this는 전역 객체를 가리킨다.
console.log(radius); // 15



//생성자 함수의 인스턴스 생성 과정
/*
	생성자 함수의 역할은 프로퍼티 구조가 동일한 인스턴스를 생성하기 위한 템플릿(클래스)으로서 동작하여 인스턴스를 생성하는 것과 생성된 인스턴스를 초기화(인스턴스 프로퍼티 추가 및 초기값 할당) 하는 것이다. 
	생성자 함수가 인스턴스를 생성하는 것은 필수이고, 생성된 인스턴스를 초기화하는 것은 옵션이다. 
*/

// 생성자 함수 
	function Circles(radius){
		//인스턴스 초기화
		this.radius = radius;
		this.getDiameter = function(){
			return 2*this.radius;
		}
	}

	//인스턴스 생성
	const circle6 = new Circles(5);//반지름이 5인 circle객체를 생성

	/*
		1. 인스턴스 생성과 this 바인딩
			암묵적으로 빈 객체가 생성된다. 이 빈 객체가 생성자 함수가 생성한 인스턴스이다. 그리고 암묵적으로 생성된 빈 객체, 즉 인스턴스는 this에 바인딩 된다. 
			>> 생성자 함수 내부의 this가 생성자 함수가 생성할 인스턴스를 가리키는 이유가 이것이다.
			>>> 이 처리는 함수 몸체의 코드가 한 줄씩 실행되는 런타임 이전에 실행된다.

			### 바인딩
				방인딩이란 식별자와 값을 연결하는 과정을 의미한다. this 바인딩은 this와 this가 가리킬 객체를 바인딩하는 것이다. 
	*/

	function Square(line){
		//1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
		console.log(this); // Square{}

		this.line = line;
		this.getDiameter = function(){
			return line*line;
		};
	}

	
	
	/*
		2. 인스턴스 초기화
			생성자 함수에 기술되어 있는 코드가 한 줄씩 실행되어 this에 바인되어 있는 인스턴스를 초기화한다. 즉, this에 바인딩되어 있는 인스턴스에 프로퍼티나 메소드를 추가하고 생성자 함수가 인수로 전달받은 초기값을 인스턴스 프로퍼티에 
			할당하여 초기화하거나 고정값을 할당한다. 
	*/
	function Triangle(lines){
		//1. 암묵적으로 인스턴스가 셍성되고 this에 바인딩된다.

		//2. this에 바인딩되어 있는 인스턴스를 초기화한다.
		this.lines = lines;
		this.getDiameter = function(){
			return (lines*lines)/2;
		}
	}


	/*
		3. 인스턴스 반환
			생성자 함수 내부의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
	*/

	function Rectangle(line){
		//1. 암묵적으로 빈 객체가 생성된 this에 바인딩된다.

		//2. this에 바인딩되어 있는 인스턴스를 초기화한다.
		this.line = line;
		this.getDiameter = function(){
			return line*line;
		};


		//3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다. 
		//명시적으로 객체를 반환하면 암묵적인 this반환이 무시된다.
		return{};
	}

	//인스턴스 생성. Rectangle 생성자 함수는 암묵적으로 this를 반환한다.
	const rtg = new Rectangle(1);
	console.log(rtg);