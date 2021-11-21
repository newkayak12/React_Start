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
class ClassExample{}
console.log(typeof ClassExample);//function
/**
 * 클래스 선언문으로 정의한 클래스는 함수 선언문과 같이 소스코드 평가 과정, 즉 런타임 이전에 먼저 평가되어 함수 객체를 생성한다.
 * 이때 클래스가 평가되어 생성된 함수 객체를 생성자 함수로서 호출할 수 있는 함수, 즉 consturctor이다.
 * 생성자 함수로서 호출할 수 있는 함수는 함수 정의 가 평가되어 함수 객첼흘 생성하는 시점에 프로토타입도 더불어 생성한다.(프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제나 쌍으로 존재한다. )
 * 
 * 
 * 단, 클래스는 클래스 정의 이전에 참조할 수 없다.
 */

// console.log(classExample1);
// ReferenceError : ~






//클래스 선언문
class ClassExample1{}
// 클래스 선언문은 마치 호이스팅이 발생하지 않는 것처럼 보이나 그렇지 않다. 

 const ClassExample2 = '';
 {
	 //호이스팅이 발생하지 않는다면 ''이 출력되어야한다.
	 console.log(ClassExample2);
	 //ReferenceError:~

	 //클래스 선언문
	 class ClassExample2{}
 }
 /**
  * 클래스 선언문도 변수 선언 함수 정의와 마찬가지로 호이스팅이 발생한다. 
  * 단, 클래스는 let, const로 선언한 변수처럼 호이스팅된다. (따라서 클래스 선언문 이전에 일시적 사각지대에 빠지기 때문에 호이스팅이 발생하지 않는 것처럼 동작한다. )
  * 
  * 
  * var, let, const, function, function*, class 키워드를 사용하여 선언된 모든 식별자는 호이스팅된다. 
  * 선언문은 런타임 이전에 먼저 실행되기 때문이다. 
  * 
  */







 // 인스턴스 생성 
 /* 
 	클래스는 생성자 함수이며 new 연산자와 함게 호출되어 인스턴스를 생성한다.
*/
 	class ClassExample3{}
//인스턴스 생성
 	const me = new ClassExample3();
 	console.log(me);//ClassExampl3
 	
	// const me2 = ClassExample3();
	//클래스를 new 연산자 없이 호출하면 타입 에러가 발생한다.
 	// TypeError : Class constructor ~~ cannot be invoked without 'new'

/**
 *  함수는 new 연산자의 사용 여부에 따라 일반 함수로 호출도히거나 인스턴스 생성을 위한 생성자 함수로 호출되지만 
 * 
 * 클래스는 생성하는 것이 유일한 존재 이유이므로 반드시  new 연산자와 함께 호출해야한다. 
 *  */	 

const Pearson = class Myclass{};
//함수 표현식고 ㅏ마찬가지로 클래스를 가리키는 식별자로 인스턴스를 생성해야 한다.
const my = new Pearson();

//클래스 이름 myClass는 함수와 동일하게 클래스 몸체 내부에서만 유효한 식별자이다. 
// console.log(MyClass); //ReferenceError : Myclass is not defined

// const you = new Myclass(); // ReferenceError: MyClass is not defined





 //메소드 : 클래스 몸체에는 0개 이상의 메소드만 선언할 수 있다. 큺래스 몸체에서 정의할 수 있는 메소드는 constructor(생성자), 프로토 타입 메솓, 정적 메소드 이 세 가지가 있다. 
 /**
  *  constructor/ protoType Method/ static method
  */

 class Person1{
	 // 생성자 

	 constructor(name){
		 //인스턴스 생성 및 초기화
		 this.name = name;
	 }
 }

 //클래스는 함수이다.
 console.log(typeof Person1); // function
 console.dir(Person1)
 /*
  	class Person1
	length: 1
	name: "Person1"
	prototype: 
 		constructor: class Person1
		[[Prototype]]: Object
		constructor: ƒ Object()
		hasOwnProperty: ƒ hasOwnProperty()
		isPrototypeOf: ƒ isPrototypeOf()
		propertyIsEnumerable: ƒ propertyIsEnumerable()
		toLocaleString: ƒ toLocaleString()
		toString: ƒ toString()
		valueOf: ƒ valueOf()
		__defineGetter__: ƒ __defineGetter__()
		__defineSetter__: ƒ __defineSetter__()
		__lookupGetter__: ƒ __lookupGetter__()
		__lookupSetter__: ƒ __lookupSetter__()
		__proto__: (...)
		get __proto__: ƒ __proto__()
		set __proto__: ƒ __proto__()
	arguments: (...)
	caller: (...)
	[[FunctionLocation]]: VM51:4
	[[Prototype]]: ƒ ()
	[[Scopes]]: Scopes[2]

  */
 /**
  * 이처럼 클래스는 평가되어 함수 객체가 된다. 
  * 클래스도 함수 객체 고유의 프로퍼티를 모두 갖고 있다. 함수와 동일하게 프로토타입과 연결되어 있으며 자신의 스코프 체인을 구성한다. 
  * 
  * 
  * 모든 함수 객체가 가지고 있는 prototype 프로퍼티가 가리키는 프로토타입 객체의 constructor 프로퍼티는 클래스 자신을 가리키고 있다. 이는 클래스가 인스턴스 생성하는 생성자 함수라는 것을 의미한다. 
  * new 연산자와 함께 클래스를 호출하면 클래스는 인스턴스를 생성한다. 
  * 
 	Person {name: 'Lee'}
		name: "Lee"
		[[Prototype]]: Object
			constructor: class Person
			[[Prototype]]: Object
				constructor: ƒ Object()
				hasOwnProperty: ƒ hasOwnProperty()
				isPrototypeOf: ƒ isPrototypeOf()
				propertyIsEnumerable: ƒ propertyIsEnumerable()
				toLocaleString: ƒ toLocaleString()
				toString: ƒ toString()
				valueOf: ƒ valueOf()
				__defineGetter__: ƒ __defineGetter__()
				__defineSetter__: ƒ __defineSetter__()
				__lookupGetter__: ƒ __lookupGetter__()
				__lookupSetter__: ƒ __lookupSetter__()
				__proto__: (...)
				get __proto__: ƒ __proto__()
				set __proto__: ƒ __proto__() 


	Person 클래스의 constructor내부에서 this에 추가한 name 클래스가 생성한 인스턴스의 프로퍼티로 추가된 것을 알 수 있다. 
	즉, 생성자 함수와 마찬가지로 constructor 내부에서 this에 추가한 프로퍼티는 인스턴스 프로퍼티가 된다. constructor 내부의 this는 생성자 함수와 마찬가지로 클래스가 생성한 인스턴스를 가리킨다.
	
	
	여기서 중요한 것은 클래스 몸체에 정의한 constructor가 단순한 메소드가 아니란느 것이다. 
	constructor는 메소드로 해석되는 것이 아니라 클래스가 평가되어 생성한 함수 객체 코드의 일부가 된다. 
	다시 말하면, 클래스 정의가 평가되면 constructor의 기술된 동작을 하는 함수 객체가 생성된다.
	
			/&
					클래스의 constructor 메소드와 프로토타입의 constructor 프로퍼티 

				클래스의 constructor 메소드와 프로토타입의 constructor 프로퍼티는 이름이 같아 혼동하기 쉽지만 직접적인 관련이 없다. 
				프로퍼티타입의 constructor 프로퍼티는 모든 프로토타입이 가지고 있는 프로퍼티이며, 생성자 함수를 가리킨다.
			&/

	constructor는 생성자 함수와 유사하지만 몇 가지 차이가 있다.
	consturctor는 클래스 내에 최대 한 개만 존재할 수 있다. 만약 클래스가 2개 이상의 constructor를 포함하면 문법에러(SyntaxError)가 발생한다. 

  */


	class ConstructorTest{
		constructor(){}
		// constructor(){}
		//SyntaxError : A class may only have one constructor
	}

	//constructor는 생략할 수도 있다.

	class NoConstructor{};
	//이와 같은 상황에서는 암묵적으로 빈 constructor가 정의된다. constructor를 생략한 클래스는 빈 constructor에 의해 빈 객체르 ㄹ생성한다. 


//ex)
	class Animal{
		//  constructor는 생략하면 아래와 같이 빈 constructor가 암묵적으로 정의된다. 
		constructor(){}
	}
	

	//빈 객체가 생성된다.
	const dog = new Animal();
	console.log(dog);// Animal{}



	//프로퍼티가 추가되어 초기화된 인스턴스를 생성하려면 constructor 내부에서 this에 인스턴스 프로퍼티를 추가한다. 
	class Insect{
		constructor(){
			//고정값으로 인스턴스 초기화 
			this.name = 'ANT'
			this.size = "3cm"
		}
	}

	//인스턴스 프로퍼티가 추가된다.
	const ant = new Insect();
	console.log(ant) // Insect{name:"ANT", size:"3cm"}
	
	
	//외부에서 인스턴스 프로퍼티의 초기값을 전달하려면 매개변수와 이어주면 된다.
	class Bird{
		constructor(name, height){
			//인수로 초기화
			this.name = name;
			this.height = height;
		}
	}

	const eagle = new Bird("Eagle","1m 90cm")
	console.log(eagle);//Bird{name: "Eagle",height:"1m 90cm"} 
	
	// constructor는 별도의 반환문을 갖지 않아야 한다. 
	// new 연산자와 함께 클래스가 호출되면 생성자 함수와 동일하게 암묵적으로 this, 즉 인스턴스를 반환하기 떄문이다.

	// 만약 'this'가 아닌 다른 객체를 명식적으로 반환하면 this, 즉 인스턴스가 반환되지 못하고 return 문에 명시한 객체가 반환된다.


	//constructor return
	class ConstructorReturnTest{
		constructor(test){
			this.test = test;
			
			//명시적으로 객체를 반환 암묵적인 this 반환이 무시된다. 
			return {}
		}
	}

	// constructor에서 명시적으로 반환한 빈 객체가 있다.
	const ttest = new ConstructorReturnTest("test");
	console.log(ttest);//{}

	// 하지만 명시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다.

	class Girl{
		constructor(name){
			this.name = name
			return 100;
		}
		
	}
	const friend = new Girl("YJ")
	console.log(friend); // Girl{name:"YJ"}

	/** 
	* 이와 같이 constructor 내부에서 명시적으로 this가 아닌 다른 값을 반환하는 것은 클래스의 기본 동작을 훼손한다. 
	* 따라서 constructor 내부에서 return 문을 반드시 생략해야 한다. 
	*/
