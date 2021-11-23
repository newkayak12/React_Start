//클래스의 인스턴스 생성 과정
/**
 * new 연산자와 함께 클래스를 호출하면 생성자 함수와 마찬가지로 클래스의 내부 메소드 [[Construct]]가 호출된다. 
 * 클래스는 new 연산자 없이 호출할 수 없다. 
 * 
 * 1. 인스턴스 생성과 this바인딩
 * > new 연산자와 함께 클래스를 호출하면 constructor의 내부 코드가 실행되기에 앞서 암묵적으로 빈 객체가 생성된다.
 * 이 빈 객체가 바로 (완성되지는 않았으나) 클래스가 생성한 인스턴스이다.
 * 이때 클래스가 생성한 인스턴스의 프로토타입으로 클래스의 prototype 프로퍼티가 가리키는 객체가 설쩡된다.
 * 그리고 암묵적으로 생성된 빈 객체, 즉 인스턴스는 this에 바인딩된다. 따라서 constructor 내부의 this는 클래스가 생성한 인스턴스를 가리킨다.
 * 
 * 
 * 2. 인스턴스 초기화 
 * > constructor의 내부 코드가 실행되어 this에 바인딩되어 있는 인스턴스를 초기화한다. 즉, this에 바인딩 되어있는 인스턴스에 프로퍼티를 추가하고 constructor가 
 * 인수로 전달받은 초기값으로 인스턴스의 프로퍼티 값을 초기화한다. 만약 constructor가 생략되었다면 이 과정도 생략된다. 
 * 
 * 
 * 3. 인스턴스 반환
 * > 클래스의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된  this가 암묵적으로 반환된다.
 */

class Person{
	//생성자
	constructor(name){
		//1.암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
		console.log(this); //Person{}
		console.log(Object.getPrototypeOf(this)===Person.prototype); //true

		//2.this에 바인딩되어 있는 인스턴스를 초기화한다.
		this.name = name;

		//3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다. 
	}
}



//>> 프로퍼티 
	// 1. 인스턴스 프로퍼티
	/**
	 * 인스턴스 프로퍼티는 constructor 내부에 정의해야한다.
	 */
	class Person1{
		constructor(name){
			//인스턴스 프로퍼티
			//public하다. (ES6의 클래스는 다른 객체 지향 언어처럼 private, public, protected  키워드와 같은 접근 제한자를 지원하지 않는다. )
			this.name = name
		}
	}

	/**
	 * constructor 내부 코드가 실행되기 이전에 constructor내부의 this에는 이미 클래스가 암묵적으로 생성한 인스턴스인 빈 객체가 바인딩 되어있다.
	 * 생성자 함수에서 생성자 함수가 생성할 인스턴스의 프로퍼티를 정의하는 것과 마찬가지로 constructor내부에서 this에 인스턴스 프로퍼티를 추가한다. 
	 * 이로써 클래스가 암묵적으로 생성한 빈 객체, 즉 인스턴스에 프로퍼티가 추가되어 인스턴스가 초기화된다. 
	 */




	//2. 접근자 프로퍼티
	/**
	 * 접근자 프로퍼티는 자체적으로 값([[Value]] 내부슬롯)을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티이다. 
	 */

	const person = {
		firstName:'UMANO',
		lastName:"BILLS",

		//FullName은 접근자 함수로 구성된 접근자 프로퍼티이다.
		//getter
		 get fullName(){
			 return `${this.firstName} ${this.lastName}`
		 },
		 set fullName(name){
			 // 배열 구조분해 할당 
			 [this.firstName,this.lastName] = name.split(' ')
		 }
	}

	//데이터 프로퍼티를 통해 접근
	console.log(`${person.firstName} ${person.lastName}`)

	//접근자 프로퍼티를 통한 프로퍼티 값의 저장
	//접근자 프로퍼티  fullName에 값을 접근하면 setter를 호출한다.
	person.fullName= "Michael Carrick"
	//접근자 프로퍼티 fullname에 접근하면 getter를 호출한다.
	console.log(person.fullName)

	//접근자 프로퍼티는 get, set, enumerable, configurable프로퍼티 어트리뷰트를 갖는다. 
	console.log(Object.getOwnPropertyDescriptor(person, "fullName"))
	/*
	{
		get: [Function: get fullName],
		set: [Function: set fullName],
		enumerable: true,
		configurable: true
	}
	 */
	
	//이와 같은 접근자 프로퍼티는 클래스에서도 사용할 수 있다. 
	class Person2{
		constructor(firstName, lastName){
			this.firstName = firstName
			this.lastName = lastName
		}

		//getter
		get fullName(){
			return `${this.firstName} ${this.lastName}`
		}

		//setter
		set fullName(name){
			[this.firstName, this.lastName] = name.split(' ');
		}
	}

	const me2 = new Person2("YJ","KIM")

	//프로퍼티 값의 참조
	console.log(`${me2.firstName} ${me2.lastName}`)

	//fullName에 값을 저장하면 setter가 호출된다.
	me2.fullName="HEEJIN LEE"

	//fullName에 접근하면 getter가 호출된다.
	console.log(me2.fullName)

	//접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다. 
	console.log(Object.getOwnPropertyDescriptor(Person2.prototype, 'fullName'))
	/*
	{
		get: [Function: get fullName],
		set: [Function: set fullName],
		enumerable: false,
		configurable: true
	}
	*/

	//이와 같이 접근자 프로퍼티는 자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 getter/ setter로 이루어져있다. 
	// getter/setter은 인스턴스 프로퍼티처럼 사용된다. 다시말해 getter/setter은 호출하는 것이 아니라
	// 프로퍼티처럼 참조하는 형식으로 사용하여 참조시에 내부적으로 getter/setter가 호출된다. 




	//3. 클래스 필드 정의 제안 
	/**
	 * 클래스 필드란 클래스 기반 객체 지향 언어에서 클래스가 생성할 인스턴스의 프로퍼티를 가리키는 용어이다.
	 * 
	 * 자바는 클래스 몸체에 this없이 선언한다.
	 * 자바스크립트는 인스턴스 프로퍼티를 선언하고 초기화하려면 반드시 constructor 내부에서 this에 프로퍼티를 추가해야 한다. (this는 constructor와 메소드에서만 유효하다.)
	 * 
	 * 자바는 클래스 필드를 this 없이 참조한다. (this는 언제나 클래스가 생성할 인스턴스를 가리킨다. this는 주로 클래스 필드가 생성자 또는 메소드의 매개변수 이름과 동일 할 때 클래스 필드를 명확하게 하기 위해 쓴다.)
	 * 자바스크립트는 인스턴스 프로퍼티를 참조하려면 this를 사용해서 참조해야한다.
	 * 
	 * <<NODE 12이상 / 크롬 72 이상에서 정상 작동>
	 */

	class Person4{
		//this를 클래스 필드에 바인딩하면 안된다. 
		// this.name = '' //syntaxError
		name = 'Lee'
		
		//필드를 초기화하지 않으면 undefined가 된다. 
		// age;



		constructor(age){
			// console.log(name) //ReferenceError
			//자바스크립트는  this를 생략할 수 없다.
			console.log(this.name)
			

			this.age = age;
			//외부 초기값으로 클래스 필드를 초기화해야할 필요가 있다면 constructor클래스 필드를 사용해야한다. 
			//추가적으로 필드를 굳이 선언할 필요가 없다. 
		}

		/**
		 * 함수는 일급 객체이므로 함수를 클래스 필드에 할당할 수 있다. 따라서 클래스 필드를 통해 메소드를 정의할 수 있다.
		 */

		getName = function(){
			return this.name
		}

		setName = (name)=>{
			this.name = name;
		}
		//화살표 함수도 된다. 
		//이와 같이 클래스 필드에 함수를 할당하는 경우 이 함수는 프로토타입 메소드가 아닌 인스턴스 메소드가 된다. 
		// 모든 클래스 필드는 인ㅁ스턴스 프로퍼티가 되기 때문이다. 
	}



	//4. private 필드 정의 제안
	/**
	 * JS는 캡슐화를 완벽히 지원하지 않는다. 뿐만 아니라 JS는 private, public, protected와 같은 접근 제한자를 지원하지 않는다.
	 * 따라서 인스턴스 프로퍼티는 인스턴스를 통해 클래스 외부에서 언제나 참조할 수 있다. 언제나 public이다. 
	 * 
	 * 다행히 2021년 1월 기준으로 private필드를 정의할 수 있게 되었다. 
	 * private 필드의 선두에는 #를 붙인다 .
	 */

	class Person5{
		#name = '';
		constructor(name){
			//private 필드 참조
			this.#name = name;
		}

		get getName(){
			return this.#name
			//this.name이 아니라 #name이라고 해야 하는구나
		}

		set getName(name){
			this.#name = name;
		}
	}
	const me5 = new Person5("lee");
	console.log(me5)
	console.log(me5.getName)



	//5. static 필드 정의
	/**
	 * 2021년 들어서 static class feature가 제안되었다.
	 */

	class MyMath{
		//sttic public field
		static PI = 22/7;

		//static private
		static #num = 10;

		//static methods
		static increment(){
			return ++MyMath.#num
		}
	}

	console.log(MyMath.PI)
	console.log(MyMath.increment())