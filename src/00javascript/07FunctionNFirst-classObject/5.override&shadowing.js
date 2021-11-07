//오버라이드와 프로퍼티 섀도잉

const Person = (function(){
	//생성자 함수
	function Person(name){
		this.name =  name
	};

	//프로토타입 메소드
	Person.prototype.sayHello = function(){
		console.log(`hi! my name is ${this.name}`);
	}

	return Person;
}());


const me = new Person('LEE');

//인스턴스 메소드
me.sayHello = function(){
	console.log(` ${this.name} is my last-name`);
}

//인스턴스 메소드 호출 .. >> 프로토타입 메소드는 인스턴스 메소드에 의해 가려진다.
me.sayHello(); //LEE is my last-name

// 생성자 함수로 객체(인스턴스)를 생성한 다음, 인스턴스테 메소드를 추가했다. 

/*
	프로토타입이 소유한 프로퍼티(메소드 포함)를 프로토타입 프로퍼티, 인스턴스가 소유한 프로퍼티를 인스턴스 프로퍼티라고 부른다. 
	프로토타입 프로퍼티오 같은 이름의 프로퍼티를 인스턴스에 추가하면 프로토타입 체인을 따라 프로토타입 프로퍼티를 검색하여 프로토타입 프로퍼티를 덮어쓰는 것이 아니라

	인스턴스 프로퍼티를 추가한다.  이 때, 인스턴스 메소드 sayHello는 프로토타입 메소드 sayHello를 오버라이딩 했고 프로토타입 메소드 sayHello는 가려진다.
	이처럼 상속관계에 의해 프로퍼티가 가려지는 현상을 ~~프로퍼티 섀도잉(prorperty Shadowing)~~이라고 한다.
*/

//인스턴스 메소드를 삭제한다.
delete me.sayHello
//인스턴스에 sayHello가 없으므로 프로토타입 메소드가 호출된다.
me.sayHello() // hi! my name is LEE

// 다시 한 번 삭제하면 프로토타입 메소드를 삭제할 수 있을까??
delete me.sayHello
//프로토타입 메소드가 호출된다. 
me.sayHello() // hi! my name is LEE
//하위 객체를 통해 프로토타입의 프로퍼티를 변경 또는 삭제하는 것은 불가능하다.
// 즉, 하위 객체를 통해 프로토타입에 get을 하는 것은 허용되나 set은 허용되지 않는다. 
// 프로토타입 프로퍼티를 변경/ 삭제하려면 하위 객체를 통해서 프로토타입 체인으로 접근하는 것이 아니라. 프로토타입에 직접 접근해야한다. 

delete Person.prototype.sayHello;
// me.sayHello();//TypeError : me.sayHello is not a function




//>> 프로토타입의 교체
// 프로토타입은 임의의 다른 개겣로 변경할 수 있다. 이는 부모 객체인 프로토타입을 동적으로 변경할 수 있다는 것을 의미한다. 
// 이러한 특징을 화용하면 객체 간의 상속 관계를 동적으로 변경할 수 있다. >> 프로토타입은 생성자 함수 또는 인스턴스에 의해 교체할 수 있다.


//>> 생성자 함수에 의한 프로토타입의 교체

const Person1 = (function(){
	function Person1(name){
		this.name = name;
	}
	
	//생성자 함수의 prototype프로퍼티를 통해 프로토타입으로 교체
	Person1.prototype = {
		sayHello(){
			console.log(`hi my name is ${this.name}`);
		}
	};
	// 이렇게 하면 객체 리터럴에는 constructor프로퍼티가 없다. 
	// 따라서 me 객체 생성자 함수를 검색하면 Person1이 아닌 Object가 나온다.
	return Person1
}());

const me1 = new Person1("YJ")


//프로토타입을 교체하면 constructor프로퍼티와 생성자 함수 간의 연결이 파괴된다.
console.log(me1.constructor === Person1); //false
//프로토타입 체인을 따라 Object.prototype의 constructor프로퍼티가 검색된다.
console.log(me1.constructor === Object); //true

/*
	이처럼 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴된다. 

	파괴된 constructor프로퍼티와 생성자 함수 간의 연결을 되살리려면 프로토타입으로 교체한 객체 리터럴에 constructor프로퍼티를 추가하여 프로토타입의 constructor프로퍼티를 되살린다.

*/

const Person2 = (function(){
	
	function Person2(name){
		this.name = name;
	}

	//생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
	Person2.prototype={
		//constructor프로퍼티와 생성자 함수 간의 연결을 설정
		constructor:Person2,
		sayHello(){
			console.log(`hi my name is ${this.name}`);
		}
	};
	
	return Person2;
}());

const me = new Person2("lee");

//constructor 프로퍼티가 생성자 함수를 가리킨다.
console.log(me.constructor === Person);//true
console.log(me.constructor === Object); //false



//인스턴스에 의한 프로토타입의 교체
/*
	프로토타입은 생성자 함수의 prototype 프로퍼티뿐만 아니라 인스턴스의__proto_접근자 프로퍼티(또는 Object.getPrototypeOf 메소드)를 통해서 접근할 수 있다. (__proto__ 접근자 프로퍼티 / Object.setPrototypeOf메소드)를 통해 프로토 타입 교체 가능

	생성자 함수의 prototype 프로퍼티에 다른 임의의 객체를 바인딩 하는 것은 미래에 생성한 인스턴스트의 프로토 타입을 교체하는 것이다. 
*/


//
function Person3 (name){
	this.name = name;
}

const me3 = new Person3('Lee');

//프로토타입으로 교체할 객체
const parent = {
	sayHello(){
		console.log(`Hi! My name is ${this.name}`);
	}
};

// me 객체의 프로토타입을  parent 객체로 교체한다.
Object.setPrototypeOf(me3, parent);
//위 코드는 아래의 코드오 ㅏ동일하게 동작
//me.__proto__ = parent

me.sayHello(); // Hi! My name is Lee

// 위와 같이 하면 constructor 프로퍼티오 ㅏ생성자 함수 간의 연결이 파괴된다.
console.log(me.constructor === Person3); // false
//프로토타입 체인을 따라 Objwect.prototype의 cobnstructor프로퍼티가 검색된다. 
console.log(me.constructor === Object);



/// 294pg더 살펴보기