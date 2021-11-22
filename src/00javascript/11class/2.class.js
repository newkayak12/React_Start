//프로토타입 메소드 
/**
 * 생성자 함수를 사용해서 인스턴스를 생성하는 경우 프로토타입 메소드를 생성하기 위해서는 
 * 명시적으로 프로토타입에 메소드를 추가해야한다. 
 */

//생성자 함수
function Person(name){
	this.name = name;
}

//프로토타입 메소드
Person.prototype.sayHi = function(){
	console.log(`Hi! My name is ${this.name}`);
}

const me = new Person("lee")
moveBy.sayHi(); //Hi! My name is lee

// 클래스 몸체에서 정의한 메소드는 생성자 함수에 의한 객체 생성 방식과는 다르게 클래스의 prorotype
// 프로퍼티에 메소드를 추가하지 ㅇ낳아도 기본적으로 프로토타입 메소드가 된다. 

class Person1{
	//생성자
	constructor(name){
		//인스턴스 생성 및 초기화
		this.name = name;
	}

	//프로토타입 메소드
	sayHi(){
		console.log(`Hi! My name is ${this.name}`);
	}
}
const me1 = new Person1('Lee');
me1.sayHi(); //Hi! My name is Lee

//생성자 함수와 마찬가지로 클래스가 생성한 인스턴스는 프로토타입 체인의 일원이 된다.


//me1 객체 프로터타입은 person1.prototype이다.
Object.getPrototypeOf(me1)===Person1.prototype; // true
me1 instanceof Person1; // true

// Person.prototype의 프로토타입은 Object.prototype이다.
Object.getPrototypeOf(Person1.prototype) === Object.prototype; // true
me1 instanceof Object; // true

// me1 객체의 constructor는 Person1 클래스이다.
me1.constructor === Person1; // true

/**
 * 
 * 	이처럼 클래스 몸체에서 정의한 메소드는 인스턴스의 프로토타입에 존재한 프로토타입 메소드가 된다.
 * 	인스턴스는 프로토타입 메소드를 상속받아 사용할 수 있다. 
 * 
 * 	
 * 	프로토타입 체인은 기존의 모든 객체 생성 방식(객체 리터럴, 생성자 함수, Object.create 메소드 등) 뿐만 아니라 클래스에 의해 생성된 인스턴스에도 동일하게 적용된다. (생성자 함수의 역할을 클래스가 할 뿐이다.)
 * 	결국 클래스 생성자 함수와 같이 인스턴스를 생성하는 생성자 함수라고 볼 수 있다. 다시 말해, 클래스는 생성자 함수와 마찬가지로 프로토타입 기반의 객체 생성 메커니즘이다. 
 */

//정적 메소드
//정적 메소드는 인스턴스를 생성하지 않아도 호출할 수 있는 메소드를 말한다. 


//생성자 함수
function Person2(name){
	this.name = name;
}

//정적 메소드
Person2.sayHi=function(){
	console.log(`Hi!`)
};

//정적 메소드 호출
Person2.sayHi(); // Hi!

// 클래스에서 메소드에 tatic 키워드를 붙이면 정적 메소드가 된다.

class Person3{
	//생성자
	constructor(name){
		// 인스턴스 생성 및 초기화
		this.name = name;
	}

	//정적 메소드
	static sayBye(){
		console.log("Bye")
	}
	/**
	 * 이처럼 정적 메소드는 클래스에 바인딩된 메소드가 된다. 클래스는 함수 객체로 평가되므로 자신의 프로퍼티/ 메소드를 소유할 수 있다.
	 *  클래스는 클래스 정의(클래스 선언문이난 클래스 표현식)가 평가되는 시점에 함수 객체가 되므로 인스턴스와 달리 별다른 생성과정이 필요 없다. 
	 *  따라서 정적 메소드는 클래스 정의 이후 인스턴스를 생성하지 않아도 호출할 수 있다. 
	 */
}

Person3.sayBye(); //Bye
//정적 메소드는 클래스로 호출한다. 또한 인스턴스 없이도 호출할 수 있다. 
/**
 * 정적메소드는 인스턴스로 호출할 수 없다. 
 * 정적 메소드가 바인딩된 클래스는 인스턴스의 프로토타입체인 상에 존재하지 않기 떄문이다. 
 * 다시 말해 인스턴스의 프로토타입 체인 상에는 클래스가 존재하지 않기 떄문에 인스턴스로 클래스의 메소드를 상속받을 수 없다. 
 */

//인스턴스 생성
const me3 = new Person3("LEE");
// me3.sayBye(); // TypeError : me3.sayBye is not a function




//정적 메소드와 프로토타입 메소드의 차이
/**
 * 정적 메소드와 프로토타입 메소드의 차이는 아래와 같다.
 * 1. 정적 메소드는 프로토타입 메소드는 자신이 속해 있는 프로토타입 체인이 다르다.
 * 2. 정적 메소드 클래스는 호출하고 프로토타입메소드는 인스턴스로 호출한다. 
 * 3. 정적 메소드는 인스턴스 프로퍼티를 참조할 수 없지만 프로토타입 메소드 인스턴스 프로퍼티를 참조할 수 있다. 
 */

class Square1 {
	//정적 메소드
	static area(width, height){
		return width*height
	}
}

console.log(Square1.area(10,10)); //100 >> 정적 메소드 area는 인스턴스 프로퍼티를 참조하지 않는다.



class Square2{
	constructor(width, height){
		this.width=width;
		this.height=height
	}

	//프로토타입 메소드
	area(){
		return this.width*this.height;
	}
}
const square = new Square2(10,10);
console.log(square.area()); //100


