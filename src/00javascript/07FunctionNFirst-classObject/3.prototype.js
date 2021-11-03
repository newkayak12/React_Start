// Prototype


/*-----------------------------------------------------------------------------------------------------------------------------------------------------
	JS는 명령형, 함수형, 프로토타입 기반, 객체지향 프로그래밍을 지원하는 멀티 패러다임 프로그래밍 언어이다 

	ES6에서 클래스가 도입되었는데 사실 클래스도 함수이며 기존 프로토타입 기반 패턴의 문법적 설탕이라고 볼 수 있다.
	클래스와 생성자 함수는 모두 프로토타입 기반의 인스턴스를 생성하지만 정확히 동일하게 동작하지 않는다. 클래스는 생성자 함수보다 엄격하며 클래스는 생성자 함수에서 제공하지 않는 기능도 제공한다. 
-----------------------------------------------------------------------------------------------------------------------------------------------------
*/


///>>>>> 객체 지향 프로그래밍
/*
	프로그램을 명령어 또는 함수의 목록으로 보는 전통적 관점인 명령형의 절차지향적 관점에서 벗어나 여러 개의 독립적 단위, 즉 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임을 말한다.
	실체는 특징이나 설질을 나타내는 속성을 가지고 있고 이를 통해 실체를 인식하거나 구별할 수 있다는 인식을 프로그래밍에 접목한 것이다.
	위와 같은 다양한 속성을 가지고 그 중에서 프로그램에 필요한 속성만 간추려 내어 표현하는 것을 추상화라고 한다. 
*/

//ex)
const person = {
	name:"Lee",
	address:"Seoul",

	walk(){
		return `${this.name} is going to ${this.address}!`
	}
};

console.log(person);

//이처럼 속성을 통해 여러 개의 값을 하나의 단위로 구성한 복합적인 자료구조를 객체라고 하며 객체 지향 프로그래밍은 독립적인 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임이다.
// 이때, name, address는 사람의 상태 walk()는 대상의 동작을 표현한다.
// 이처럼 객체지향 프로그래밍은 객체의 상태를 나타내는 데이터와 상태 데이터를 조작할 수 있는 동작을 하나의 논리적인 단위로 묶어서 생각한다.
// 따라서 객체는 상태 데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료구조라고 생각할 수 있다.
// 이때 객체의 상태 데이터를 프로퍼티, 동작을 메소드라고 한다. 

//각 객체는 고유의 기능을 갖는 독립적 부품으로 볼 수도 있지만, 자신의 고유한 기능을 수행하며 다른 객체와 관계성을 가질 수 있다. 또한 다른 객체와 메시지를 주고 받거나 데이터를 처리할 수도 있다. 또는 다른 객체의 상태 데이터나 동작을 상속받아 사용하기도 한다. 





//>>>>>상속과 프로토타입
//상속은 객체 지향 프로그래밍의 핵심 개념으로 어떤 객체의 프로퍼티 또는 메소드를 다른객체가 상속받아 그대로 사용할 수 있는 것을 말한다.  이는 중복을 제거하는 효과를 낳는다. 
//ex)
//생성자 함수
function Circle(radius){
	this.radius=radius;
	this.getArea = function(){
		return Math.PI*this.radius**2;
	}
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);


//Circle생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는 getArea메소드를 중복생성하고 모든 인스턴스가 중복 소유한다.
//이러한 경우 getArea하나만 생성해서 공유해서 사용하는 것이 바람직하다.
console.log(circle1.getArea === circle2.getArea); //false




//자바스크립트는 프로토타입을 기반으로 상속을 구현한다.
//생성자
function CircleExtend(radius){
	this.radius = radius;
}

//CircleExtend 생성자 함수가 생성한 모든 인스턴스가 getArea메소드를 공유해서 사용할 수 있도록 프로토타입에 추가한다.
//프로토타입은 CircleExtend 생성자 함수의 protytype프로퍼티에 바인딩 되어있다. 

CircleExtend.prototype.getArea = function(){
	return Math.PI * this.radius**2;
}

const circle3 = new CircleExtend(1);
const circle4 = new CircleExtend(2);

//Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는 프로토 타입 Circle.prototype으로부터 getArea메소드를 상속받는다. 즉, CircleExtend 생성자 함수가 생성하는 모든 인스턴스는 하나의  getArea 메소드를 공유한다.
console.log(circle3.getArea === circle4.getArea); //true
//위의 구조는 자신의 상태를 나타내는 radius만 개별적으로 소유하고 내용이 동일한 메소드는 상속을 통해 공유하여 사용한다. 






//>>ProtoType
//프로토 타입 객체는 객체 간 상속을 구현하기 위해 사용된다. 프로토타입은 어떤 객체의 상위 객체의 역할을 하는 객체로서 다른 객체에 공유 프로퍼티르 제공한다. 
/*
	객체 리터럴에 의해 생성된 객체의 프로토타입은 Object.prototype이고
	생성자 함수에 의해 생성된 객체의 프로토타입은 생성자 함수의 prototype프로퍼티에 바인딩되어 있는 개체이다.

	모든 객체는 하나의 프로토타입을 갖는다. 그리고 모든 프로토 타입은 생성자 함수와 연결되어있다. 



	[[Prototype]] 내부 슬룻에는 직접 접근할 수 없지만 __proto__접근자 프로퍼티를 통해 자신의 프로토타입, 즉 자신의 [[Prototype]]내부슬롯이 가리키는 프로토 타입에 간접적으로 접근할 수 있다.
	그리고 프로토 타입은 자신의 constructor 프로퍼티를 통해 생성자 함수에 접근할 수 있고, 생성자 함수는 자신의 prototype 프로퍼티를 통해 프로토 타입에 접근할 수 있다. 
*/




//>> __proto__ 접근자 프로퍼티
/*
	모든 객체는 __proto__접근자 프로퍼티를 통해 자신의 프로토타입, 즉 [[Prototype]] 내부 슬룻에 간접적으로 접근할 수 있다. 

		
		name: "lee"				// person 객체의 프로퍼티
		-------------------------------------------------------
		[[Prototype]]: Object 			// person 객체의 프로토타입
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


	person객체의 프로토타입인 Object.prototype이다. 이는 __proto__ 접근자 프로퍼티를 통해서 person  rorcpdml [[Prototype]] 내부 슬롯이 가리키는 객체인 Object.prototype에 접근하면 위와 같다. 
	이처럼 모든 객체는 __proto__접근자 프로퍼티를 통해서 프로토 타입을 가리키는 [[Prototype]]내부 슬롯에 접근할 수 있다.
	이 말이 [[Prototype]] 내부 슬롯에 직접 접근할 수 있다는 말은 아니다. __proto__접근자 프로퍼티를 통해 간접적으로 [[Prototype]] 내부의 값, 즉 프로토타입에 접근할 수 있다.
	접근자 프로퍼티는 자체적으로 값([[Value]] 프로퍼티 어트리뷰트)을 갖지 않고 다른 데이터 프로프티의 값을 읽거나 저장할 때 사용하는 접근자 함수(accessor function), 즉 [[Get]], [[Set]] 프로퍼티 어트리뷰트로 구성된 프로퍼티다. 
*/

const obj = {};
const parent = {x:1};

// getter 함수인 get __proto__가 호출되어 obj객체의 프로토타입을 취득
obj.__proto__;

//setter
obj.__proto__ = parent;
console.log(obj.x); //1

/*
	__proto__ 접근자 프로퍼티는 객체가 직접 소유하는 프로퍼티가 아니라 Object.prototype의 프로퍼티이다.
	모든 객체는 상속을 통해 Object.prototype.__proto__접근자 프로퍼티를 사용할 수 있다. 
*/
const person1 = {name:'Lee'};

// person 객체는 __proto__ 프로퍼티를 소유하지 않는다.
console.log(person1.hasOwnProperty('__proto__'));//false

//__proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__"));
/*
	{
		get: [Function: get __proto__],
		set: [Function: set __proto__],
		enumerable: false,
		configurable: true
	}
*/

// 모든 객체는 Objet.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.
console.log({}.__proto__===Object.prototype)//true


/* Object.prototype
	모든 객체는 프로토타입의 계층 구조인 프로토타입 체인에 묶여있다. 자바스크립트 엔진은 객체의 프로퍼티(메소드 포함)에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면 __proto__
	접근자 프로퍼티가 가리키는 참조를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다. (prototypedl 상속하는 구조이므로)
	프로토타입 체인의 종점, 즉 프로토타입 체인의 최상위 객체는 Object.prototype이며, 이 객체의 프로퍼티 와 메소드는 모든 객체에 상속된다. 
*/



//__proto__ 접근자 프로퍼티를 통해 프로토타입에 접근하는 이유
// [[Prototype]] 내부 슬롯의 값, 즉 프로토타입에 접근하기 위해 접근자 프로퍼티를 사용하는 이유는 상호 참조에 의해 프로토 타입 체인이 생성되는 것을 방지하기 위해서이다. 

const parents = {};
const child = {};

// child의 프로토타입을 parent로 설정
child.__proto__ = parents;
// parent의 프로토타입을 child로 설정
// parents.__proto__ = child; 
//TypeError :Cyclic __proto__ value
//at Object.set __proto__ [as __proto__] (<anonymous>)

//프로토타입 체인은 단방향 링크드 리스트로 구현되어야 한다.  >> 순환참조할 수 없다. 


//>>__proto__ 접근자 프로퍼티를 코드 내에서 직접 사용하는 것은 권장하지 않는다. 
/*
	코드 내에서 __proto__ 접근자 프로퍼티를 직접 사용하는 것은 권장하지 않는다. 모든 객체가 __proto__접근자 프로퍼티를 사용할 수 있는 것은 아니기 떄문이다.
	직접 상속을 통해 Object.prototype을 상속받지 않는 객체를 생성할 수도 있기 때문에 __proto__접근자 프로퍼티를 사용할 수 없는 경우가 있다.
	
ex)
*/
//obj는 프로토타입 체인의 종점이다. 따라서 Object.__proto__를 상속 받을 수 없다.
const obj2 = Object.create(null);

// obj는 Object.__proto__를 상속받을 수 없다.
console.log(obj2.__proto__); //undefined

//따라서 __proto__보다 Object.getPrototypeOf 메소드를 사용하는 편이 낫다. 
console.log(Object.getPrototypeOf(obj2)); //null

//따라서 __proto__ 접근자 프로퍼티 대신 프로토타입의 참조를 취득하고 싶은 겨웅에는 Object.getPrototypeOf 메소드를 사용하고
//프로토타입을 교체하고 싶은 경우에는 Obejct.setPrototypeOf 메소드를 사용할 것을 권장한다. 
//ex)
const objs ={}
const parents1 = {x:1};

//obj 객체의 프로토타입을 취득
Object.getPrototypeOf(objs); //objs.__proto__

//obj 객체의 프로토타입을 교체 
Object.setPrototypeOf(objs, parents1); //objs.__proto__parents1

console.log(objs.x); //1





//>> 함수객체의 Prototype 프로퍼티
//함수 객체만이 소유하는 prototype프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.

//함수 객체는 prototype 프로퍼티를 소유한다.
(function(){}).hasOwnProperty('prototype'); //true

//일반 객체는 prototype프로퍼티를 소유하지 않는다.
({}).hasOwnProperty('prototype'); //false\


/*
	prototype프로퍼티는 생성자 함수가 생성할 객체(인스턴스)의 프로토타입을 가리킨다. 따라서 생성자 함수로서 호출할 수 없는 함수, 즉 non-constructor인 

	화살표 함수와 ES6메소드 축약 표현으로 정의한 메소드는  prototype프로퍼티를 소유하지 않으며 프로토 타입도 생성하지 ㅇ낳는다. 


	ex)
*/

//화살표 함수는 non-constructor이다.
const Psr = name =>{
	this.name = name;
}


// non-constructor는 prototype 프로퍼티를 소유하지 않는다.
console.log(Psr.hasOwnProperty('prototype')); //false

// non-constructor는 프로토타입을 생성하지 ㅇ낳는다
console.log(Psr.prototype); //undefined

//ES6의 메소드 축약표현으로 정의한 메소드는 non-constructor이다.

const Objec = {
	foo(){}
}

// non-constructor는 prototype 프로퍼티를 소유하지 않는다.
console.log(Objec.foo.hasOwnProperty('prototype')); //false

// non-constructor는 프로토타입을 생성하지 않는다.
console.log(Objec.foo.prototype); //undefined


/*
	생성자 함수로 호출하기 위해 정의하지 않은 일반함수 (함수 선언문, 함수표현식)도 prototype 프로퍼티를 소유하지만 객체를 생성하지 않는 일반 함수의 prototype 프로퍼티는 아무런 의미가 없다. 

	모든 객체가 가지고 있는 (엄밀히 말하면 Object.prototype으로부터 상속받은 ) __proto++접근자 프로퍼티와 함수 객체만이 가지고 있는 prototype프로퍼티는 결국 동일한 프로토타입을 가리킨다. 
	하지만 이들 프로퍼티를 사용하는 주체가 다르다. 



	  구분		   소윺		      값	    사용 주체				사용 목적
	-------------------------------------------------------------------------------------------------------------------------------------
	__proto__
			모든 객체	  프로타입의 참조	모든 객체		객체가 자신의 프로토타입에 접근 또는 교체하기 위해 사용
	접근자 프로퍼티

	prototype
			constructor	프로토타입의 참조	생성자 함수		생성자 함수가 자신이 생성할 객체(인스턴스)의 프로토타입을 할당하기 위해 사용
	프로퍼티


	!! 생성자 함수로 객체를 생성한 후 __proto__접근자 프로퍼티와 prototype프로퍼티로 프로토타입 객체에 접근해보면 어떨까?
*/

function Testproto(name){
	this.name = name;
}

const me = Testproto('Lee');

// console.log(Testproto.prototype === me.__proto__); //true
//>> __proto__가 없는데?




//>> 프로토타입의 constructor 프로퍼티와 생성자 함수
/*
	모든 프로토타입은 constructor프로퍼티를 갖는다. constructor 프로퍼티는 prototype프로퍼티로 자신이 참조하고 있는 생성자 함수를 가리킨다. 
	이 연결은 생성자 함수가 생성될 때, 즉 함수 객체가 생성될 때 이뤄진다. 
*/

function Ppp(name){
	this.name = name;
}

const mmPpp = new Ppp("Lee");


//mmPpp 객체 생성자 함수는 Ppp이다.
console.log(mmPpp.constructor === Ppp);//true





//>>> 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입
/*
	생성자 함수에 의해 생성된 인스턴스는 프로토타입의 constructor 프로퍼티에 의해 생성자 함수와 연결된다. 
	이 때 constructor 프로퍼티가 가리키는 생성자 함수는 인스턴스를 생성한 생성자 함수이다. 
*/

//obj객체를 생성한 생성자 함수는 Object이다.


const objects = new Object();
console.log(objects.constructor === Object);//true

// add함수 객체를 생성한 생성자함수는 Function이다.
const adds = new Function('a', 'b', 'return a+b');
console.log(adds.constructor === Function)//true

//생성자 함수
function Prsn(name) {
	this.name = name;
}
const my = new Prsn("lee");
console.log(my.constructor === Prsn); //true


/*
	하지만 리터럴 표기법에 의한 객체 생성 방식과 같이 명시적으로 new 연산자와 함께 생성자 함수를 호출하여 인ㅅ턴스를 생성하지 ㅇ낳는 객체 생성 방식도 있다. 
*/

//객체 리터럴
const objZ = {};

//함수 리터럴
const addZ = function(a,b){return a+b};

//배열 리터럴
const arrZ = [1,2,3];

//정규 표현식 리터럴
const regexp = /is/ig;

//>> 리터럴 표기법에 의해 생성된 객체도 물론 프로토타입이 존재한다. 하지만 리터럴 표기법에 의해 생성된 객체의 경우 
//프로토타입의 constructor 프로퍼티가 가리키는 생성자 함수가 반드시 객체를 생성한 생성자 함수라고 단정할 수 없다. \

//objZ는 생성자 함수로 생성한 객체가 아니라 객체 리터럴로 생성했다.
//하지만 obj 객체의 생성자 함수는 Object 생성자 함수이다.
console.log(objZ.constructor===Object); //true


/*
	ObjZ는 Object 생성자 함수와 constructor 프로퍼티로 연결되어 있다. 사실 Object 생성자 함수로 생성되는 것은 아닐까?
	
	Object([value])
	When the Object function is called with optional argument value, the following steps are taken:

		1. If NewTarget is neither undefined nor the active function, then 
			a.Return ? OrdinaryCreateFromConstructor(NewTarget,"%Object.prototype%")
		2. If value is undefined or null, return OrdianryObjectCreate($Objetc.prototype$);
		3. Return ! ToObject(value).

		the "length" property of the Object constructor function is 1
*/


//  2. Object 생성 함수에 의한 객체 생성
// 인수가 전달되지 않았을 때 추상 연산 OrdinaryObjectCreate를 호출하여 빈 객체를 생성한다.
let objsz = new Object();
console.log(objsz); //{}

//1. new.target이 undefined나 Object가 아닌경우
// 인스턴스 >> foo.prototype >> Object.prototype순으로 프로토타입 체인이 생성된다.
class Flow extends Object{}
new Flow; //Flow{}

//3. 인수가 전달된 경우에는 인수를 객체로 반환한다.
// Number객체 생성
objsz = new Object(123);
console.log(objsz)//Number{123}

//Strng객체 생성
objsz = new Object('예진이')
console.log(objsz)//String{예진이}

//객체 리터럴이 평가될떄는 다음과 같이 추상 연상 OrdinaryObjectCreate를 호출하여 빈 객체를 생성하고 프로퍼티를 추가하도록 정의되어있다. 
/*
	이처럼 Object 생성자 함수 호출과 객체 리터럴의 평가는 추상 연산 OrdinaryyObjectCreate를 호출하여 빈 개겣르 생성하는 점에서 동일하나 new.target의 확인이나 프로퍼티를 추가하느 ㄴ처리 등 세부 내용은 다르다. 따라서 객체 리터럴에 의해 생성된 객체는 Obejct생성자 함수가 생성한 객체가 아니다. 

	함수 객체의 경우 차이가 더 명확하다. Function생성자 함수를 호출하여 생성한 함수는 렉시컬 스코프를 만들지 않고 전역 함수인 것처럼 스코프를 생성하여 클로저도 만들지 않는다. 
	따라서 함수 선언문고 ㅏ함수 표현식을 평가하여 함수 객체를 생성한 것은 Function 생성자 함수가 아니다. 하지만 constructot 프로퍼티를 통해 확인해보면 foo함수의 생성자 함수는 Function 생성자 함수이다. 
*/

//zoll 함수는 Function  생성자 함수로 생성한 함수 객체가 아니라 함수 선언문으로 생성했다.
function zoll(){};

//하지만 constructor 프로퍼티를 통해 확인해보면 함수 zoll의 생성자 함수는 Function생성자 함수이다.
console.log(zoll.constructor === Function)

/*
	리터럴 표기법에 의해 생성된 개겣로 상속을 위해 프로토타입이 필요하다.
	리터럴 표기법에 의해 생성된 객체도 가상적인 생성자 함수를 갖는다.
	프로토타입은 생성자 함수오 ㅏ더불어 생성되며 prototype, constructor 프로퍼티에 의해 연결되어 있기 때문에

	..... 프로토 타입과 생성자 함수는 단독으로 존재할 수 없고 언제나 쌍으로 존재한다. 


	리터럴 표기법(객체 리터럴, 함수리터럴, 배열 리터럴, 정규표현식 리터럴 등) 에 의해 생성된 객체는 생성자 함수에 의해 생성뙨 객체는 아니다. 하지만 큰 틀에서 생각해보면 리터럴 표기법으로 생성한 객체도 생성자 함수로 생성한 객체와 본질적인 면에서 큰 차이가 없다. 

	객체 리터럴에 의해 생성한 객체와 Object 생성자 함수에 의해 생성한 객체는 생성 과정에 미묘한 차이가 있지만 결국 객체로서 동일한 특성을 갖는다. 함수리터럴에 의해 생성한 함수와 Function 생성자 함수에 의해 생성한 함수는
	생성 과정과 스코프, 클로저 등의 차이가 있지만 결국 함수로서 동일한 특성을 갖는다. 


	리터럴 표기법		생성자 함수		프로토타입
	-----------------------------------------------------
	객체 리터럴		Object			Object.prototype
	함수 리터럴		Function 		Function.prorotype
	배열 리터럴		Array			Array.prototype
	정규 표현식 리터럴	  RegExp		  RegExp.prototype
*/



//>> 프로토타입의 생성 시점
/*
	Object.create 메소드와 클래스에 의한 객체 생성
	>> Object.create 메서드 클래스와 생성한 객체도 생성자 함수와 연결되어있다. 
*/


// 생성자 함수는 프로토타입과 언제나 쌍으로 존재한다.  생성자 함수는 사용자가 직접 정의한 사용자 정의 생성자 함수와 자바스크립트가 기본 제공하는 빌트인 생성자 함수로 구분할 수 있다. 


/*
	>>>사용자 정의 생성자 함수와 프로토타입 생성 시점

	constructor와 non-constructor의 구분에서 살펴본 바와 같이 내부 메소드 [[construct]]를 갖는 함수 객체,
	즉 화살표 함수나 ES6의 메소드 축약 표현으로 정의하지 않고 일반 함수(함수,선언문, 함수 표현식)으로 정의한 함수 객체는 new 연산자와 함께 생성자 함수로서 호출할 수 있다.

	__ 생성자 함수로서 호출할 수 있는 함수, 즉 constructor는 함수 정의가 평가되어 함수  객체를 생성하는 시점에 프로토타입도 더불어 생성된다.
*/

// 함수 정의(constructor)가 평가되어 함수 객체를 새엇ㅇ하는 시점에 프로토타입도 더불어 생성된다. 
	console.log('함수 객체를 생성하는 시점에 프로토타입도 더불어 생성')
	console.log(Pprsn.prototype);
	/*
		{constructor: ƒ}
		constructor: ƒ Pprsn(name)
		[[Prototype]]: Object

		브라우저 환경과 node 환경은 다르다. 
	*/

	function Pprsn(name){
		this.name = name;
	}

	// 화상 함수는 non-constructor이다.
	const Person5 = name =>{ this.name = name;} 
	console.log(Person5.prototype)

	/*
		함수 선언문은 런타임 이전에 자바스크립트 엔진에 의해 먼저 실행된다. 따라서 함수 선언문으로 정의된 Person5 생성자 함수는 어떤 코드보다 먼저 평가되어 함수 객체가 된다.
		이때 프로토타입도 더불어 생성된다.  생성된 프로토타입은 Person5 생성자 함수의 prototype프로퍼티에 바인딩 된다. 

		새성된 프로토 타입은 오직 constuctor프로퍼티만 갖는 개체다. 프로토타입도 객체이고 모든 객체는 프로토타입을 가지므로 포로토타입도 자신의 프로토타입을 갖느다. 생성된 프로토타입의 프로토타입은 Object.prototype이다.


		이처럼! 빌트인 생성자 함수가 아닌 사용자 정의 생성자 함수는 자신이 평가되어 함수 객체로 생성되는 시점에 프로토 타입도 더불어 생성되며, 생성된 프로토타입의 프로토타입은 언제나 Object.prototype이다. 
	*/






	//>>> 빌트인 생성자 함수와 프로토타입 생성 시점
	/*
		Object, String, Number, Function, Array, RegExp, Date, Promise 등과 같은 빌트인 생성자 함수도 일반 함수와 마찬가지로 빌트인 생성자 함수가 생성되는 시점에 프로토타입이 생성돈다. 
		모든 빌트인 생성자 함수는 전역 객체가 생성되는 시점에 생성된다. 생성된 프로토타입은 빌트인 생성자 함수의 prototype 프로퍼티에 바인딩된다. 

		전역 객체 : 전역개체는 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 생성되는 특수한 객체다. 전역 객체는 클라이언트 사이드 환경에서는 window,  서버 사이트 환경(node)에서는 global 객체를 의미한다. 

	*/
	// 빌트인 객체인 object는 전역 객체 window의 프로퍼티이다. 
	console.log(global.Object === Object)//true

	/*
		객체가 생성되기 이저넹 생성자 함수오 ㅏ프로토타입은 이미 객체화되어 존재한다. 
		 이후 생성자 함수 또는 리터럴 표기법으로 객체를 생성하면 프로토타입은 생성된 객체의 [[Prototype]] 내부 슬롯에 할당된다. 
		 이로써 생성된 객체는 프로토타입을 상속받는다. 
	*/




	


	// 객체 생성 방식과 프로토타입의 결정
	/*
		객체 생성 방법에는 
		1. 객체 리터럴
		2. Object생성자 함수
		3. 생성자 함수
		4. Object.create메소드
		5. 클래스(ES6)

	이처럼 다양한 방식으로 생성된 모든 객체는 각 방식마다 세부적인 객체 생성 방식의 차이는 있으나 추상 연산 OrdinaryObjectCreate에 의해 생성된다는 공통점이 있다. 
	*/

