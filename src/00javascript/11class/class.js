// 클래스
// >> 클래스는 프로토타입의 문법적 설탕인가? (있으나 마나인가? )

/**
 * JS는 프로토타입 기반의 객체지향 언어이다. 
 * 프로토타입 기반 객체지향 언어는 클래스가 필요 없는 객체지향 프로그래밍 언어이다.
 */

//ES5 생성자 함수
var Person = (function(){
	//생성자 함수
	function Person(name){
		this.name = name;
	}

	Person.prototype.sayHi = function(){
		console.log('Hi! My name is '+this.name);
	};

	return Person;
}());

var me = new Person("Lee");
me.sayHi(); //Hi! My name is Lee

/** 
 * JS의 클래스는 함수이며 기존 프로토타입 기반 패턴을 클래스 기반 패턴처럼 사용할 수 있도록 하는 문법적 설탕이다.
 * 단, 클래스와 생성자 함수는 모두 프로토타입 기반의 인스턴스를 생성하지만 정확히 동일하게 동작하지는 않는다.
 * 
 *  	[ 클래스와 생성자 함수의 차이점 ] 
 * 1. 클래스를 new 연산자 없이 호출하면 에러가 발생한다. 하지만 생성자 함수를 new 연산자 없이 호출하면 일반 함수로서 호출된다. 
 * 2. 클래스는 상속을 지원하는 extends와 super를 제공한다. 하지만 생성자 함수는 extends와 super 키워드를 지원하지 않는다.
 * 3. 클래스는 호이스팅이 발생하지 않는 것처럼 동작한다. 하지만 함수 선언문으로 정의된 생성자 함수는 함수 호이스팅이, 함수 표현식으로 정의한 생성자 함수는 변수 호이스팅이 발생한다. 
 * 4. 클래스 내의 모든 코드에는 암묵적으로 Strict mode가 지정되어 실행되어 strict mode를 해제할 수 없다. 하지만 생성자 함수는 암묵적으로 strict mode가 지정되지 않는다.
 * 5. 클래스의 constructor, 프로토타입 메소드 정적 메소드는 모두 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 false이다. (열거가 되지 않는다.)
 * 
 * 
 * 
 * 
 *  생성자 함수와 클래스는 프로토타입 기반의 객체지향을 구현했다는 점에서 매우 유사하다. 하지만 클래스는 생성자 함수 기반의 객체 생성 방식보다 견고하고 명료하다.
 * 특히 클래스의 extends, super키워드는 상속 관계 구현을 더욱 간결하고 명료하게 한다.
 * 
 * 결과적으로 클래스를 새로우 ㄴ객체 생성 메커니즘으로 보는 것이 더 합당하다. 
 */


//클래스 정의 
/**
 * 클래스는 class 키워드를 사용하여 정의한다. 
 */
//클래스 선언문
class People{}

//일반적이지 않지만 마찬가지로 표현식으로 클래스를 정의할 수도 있다. 이때 클래스는 함수오 ㅏ마찬가지로 이름을 가질 수도 있고 아닐 수도 있다. 
//익명 클래스 표현식
let exam1 = class{};

//기명 클래스 표현식
let exam2 = class MyClass{};

//클래스를 표현식으로 정의할 수 있다는 것은 클래스가 값으로 사용할 수 있는 일급 객체라는 것이다.
/**
 * 	1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
 * 	2. 변수나 자료구조(배열, 객체 등)에 저장할 수 있다.
 * 	3. 함수의 매개변수에게 전달할 수 있다.
 * 	4. 함수의 반환값으로 사용할 수 있다.
 * 
 * 면밀히 말하면 클래스는 함수이다. 따라서 클래스는 값처럼 사용할 수 있는 일급 객체이다. 
 * 클래스 몸체는 0개 이상의 메소드만 정의할 수 있다. 클래스 몸체에서 정의할 수 있는 메소드는 constructor(생성자), 프로토타입 메소드, 정적 메소드 세 가지가 있다. 
 */


//클래스 선언문
class Persona {
	//생성자
	constructor(name){
		//인스턴스 생성 및 초기화
		this.name = name; // name프로퍼티는 public이다.
	}

	//프로토타입 메소드
	sayHi(){
		console.log(`Hi! My name is ${this.name}`);
	}

	static sayHello(){
		console.log("Hello!")
	}
}

//인스턴스 생성
const mi = new Persona('Lee');

//인스턴스의 프로퍼티 참조
console.log(mi.name); //Lee
//프로토타입 메소드 호출
mi.sayHi(); //Hi! My name is Lee
//정적 메소드 호출
Persona.sayHello(); //Hello

//클래스와 생성자 함수의 정의 방식을 비교해보면
/*
	var Person = (function (){				|	class Person {
								|	
		function Person(name){				|		constructor(name){
			this.name = name			|			this.name = name;
		}						|		}
								|
								|
								|
								|	
		Person.prototype.sayHi = function(){		|		sayHi(){
			console.log('Hi!'+this.name)		|			console.log('Hi' +this.name);
		}						|		}
								|
								|
								|
								|
		Person.sayHello = function(){			|		static sayHello(){
			console.log('Hello');			|			console.log("Hello!")
		}						|		}
								|
								|	}
		return  Person					|
	}());							|


>>> 이처럼 클래스와 생성자 함수의 정의 방식은 형태적인 면에서 매우 유사하다. 

 */



// 클래스 호이스팅 (클래스는 함수로 평가된다. )
//클래스 선언문
class classExample{}
console.log(typeof classExample);//function
/**
 * 클래스 선언문으로 정의한 클래스는 함수 선언문과 같이 소스코드 평가 과정, 즉 런타임 이전에 먼저 평가되어 함수 객체를 생성한다.
 * 이때 클래스가 평가되어 생성된 함수 객체를 생성자 함수로서 호출할 수 있는 함수, 즉 consturctor이다.
 * 생성자 함수로서 호출할 수 있는 함수는 함수 정의 가 평가되어 함수 객첼흘 생성하는 시점에 프로토타입도 더불어 생성한다.(프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제나 쌍으로 존재한다. )
 */