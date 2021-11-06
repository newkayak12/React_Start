//>> 객체 리터럴에  의해 생성된 객체의 프로토티입
/*
     자바스크립트 엔진은 객체 리터럴을 평가하여 객체를 생성할 때 추상 연산 OrdinaryObjectCreate를 호출한다. 
     이떄 추상연산 OrdinaryObjectCreate에 전달되는 프로토 타입은 Object.prototype이다. 즉, 객체 리터럴에 의해 생성되는 객체의 프로토타입은 Object.prorotype이다. 
*/

const obj = {x:1};

/*
	위 객체 리털럴에 평가되면 추상 연산 OrdinaryObejctCreate에 의해 Object 생성자 함수와 Object.prototype과 생성된 객체 사이 연결이 만들어진다. 
	객체 리터럴에 의해 생성된 obj객체는 Object.prototype을 프로토타입으로 갖게 되며, 이로써 Object.prototype을 상속받는다. 
	obj객체는 constructor 프로퍼티와 hasOwnProperty 메소드등을 소유하지는 않지만 자신의 프로토타입인 Obeject.prototype의 constructor 프로퍼티와 hasOwnProperty메소드를 자신의 자산인 것처럼 자유롭게 사용할 수 있다.
	이는 Obj객체가 자신의 프로토타입인 Objet.prototype객체르 상속받았기 때문이다.
*/

//객체 리터럴에 의해 생성된 obj 객체는 Object.prototype을 상속받는다.
console.log(obj.constructor === Object); // true
console.log(obj.hasOwnProperty('x')); //true






//>> Object 생성자 함수에 의해 생성된 객체의 프로토타입
/*
	Object 생성wk가 함수를 인수 없이 호출하면 빈 객체가 생성된다. Object 생성자 함수를 호출하면 객체 리터럴과  마찬가지로 추상 연산 OrdinaryObejctCreate가 호출된다. 
	이때 추상 연산 OrdinaryObjectCreate에 전달되는 프로토타입은 Object.prototype이다. 
	즉, Object 생성자 함수에 의해 생성되는 객체의 프로토 타입은 Object.prototype이다.
*/

	const objs = new Object()
	objs.x = 1;


/*
	추상 연산 OrdinaryObjectCreate에 의해 Object 생성자 함수와 Object.prototype과 생성되 ㄴ객체 사이에 연결이 만들어진다. 
	>> 객체 리터럴에 의해 생성된 객체와 동일한 구조를 갖는 것을 알 수 있다. 

	이처럼 Object 생성자 함수에 의해 생성된 obj 객체는 Object.prototype을 프로토타입으로 갖게 되며, 이로써 Object.prototype을 상속받는다.
*/

	const objct = new Object();
	objct.x = 1;

	//Object 생성자 함수에 의해 생성된 objct객체는 Object.prototype을 상속받는다. 
	console.log(objct.constructor === Object); //true
	console.log(objct.hasOwnProperty('x'));

	/*
		객체 리터럴과 Object 생성자 함수에 의한 객체 생성 방식의 차이는 프로퍼티를 추가하는 방식에 임ㅆ다.

		객체 리터럴 방식은 객체 리터럴 내부에 프로퍼티를 추가하지만 Object 생성자 함수 방식은 일단 빈 객체를 생성한 이후 프로퍼티를 추가해야 한다. 
	*/




//>>> 샹송저 함수에 의해 생성된 객체의 프로토타입
/*
	new 연산자와 함께 생성자 함수를 호출하여 인스턴스를 생성하면 다른 객체 생성 방식과 마찬가지로 추상 연산 OrdinaryObjectCreate가 호출된다.
	이때 추상 연산 OrdinaryObjectCreate에 전달되는 프로토타입은 생성자 함수의 prototype프로퍼티에 바인딩되어있는 객체다.
	 즉, 생성자 함수에 의해 생성되는 객체의 프로토타입은 생성자 함수의 prototype프로퍼티에 바인딩되어 있는 객체이다.
*/
	function Prsn(name){
		this.name = name;
	}

	const me = new Prsn('lee');


//표준 빌트인 객체인 Object 생성자 함수와 더불어 생성된 프로토타입 Object.prototype은 다양한 빌트인 메소드(hasOwnProperty, propertyIsEnumerable 등)를 갖고 있다. 
//하지만 사용자 정의 생성자 함수 Person과 더불어 생성된 프로토타입 Person.prototype의 프로퍼티는 constructor뿐이다.


//프로토타입 Prsn.prototype에 프로퍼티를 추가하여 하위 객체가 상속받을 수 있도록 구현하면
//프로토타입은 객체이다. 따라서 일반 객체와 같이 프로토타입에도 프로퍼티를 추가/삭제할 수 있다. 그리고 이렇게 추가/삭제된 프로퍼티는 프로토타입 체인에 즉각 반영된다. 

//프로토타입 메소드 
Prsn.prototype.sayHello = function(){
	console.log(`Hi! My name is ${this.name}`);
}

const my = new Prsn('Lee');
const you = new Prsn('Kim');

my.sayHello();
you.sayHello();

//Prsn 생성자 함수를 통해 생성된 모든 객체는 프로토타입에 추가된 sayHello 메소드를 상속 자신의 메소드처럼 사용할 수 있다. 

console.log(my.hasOwnProperty('name')); //true
//Prsn 생성자 함수에 의해 생성된 my객체는 Object.prototype의 메소드인 hasOwnProperty를 호출할 수 있다.
//이는 my객체가 Prsn.prototype뿐만 아니라 Object.prototype도 상속 받았다는 것을 의미한다.

console.log(Object.getPrototypeOf(my) === Prsn.prototype);//true
//Prsn.prototype의 프로토타입은 Object.prototype이다. 프로토타입의 프로토타입은 언제나 Object.prototype이다. 

console.log(Object.getPrototypeOf(Prsn.prototype) === Object.prototype); //true

/*
	자바스크립트는 객체의 프로퍼티(메소드 포함)에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다. [[Prototype]]내부 슬롯의 참조를 따라 부모역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다.

	이를 프로토타입 체인이라고한다. 

	프로토타입 체인은 자바스크립트가 객체지향 프로그래밍의 상속을 구현하는 메커니즘이다. 
*/


// CALL 메소드
/*
	Call 메소드는 this로 사용할 객체를 전달하면서 함수를 호출한다. 

	프로토타입 체인의 최상위에 위치하는 객체는 언제나 Object.prototype이다. 따라서 모든 객체는 Object.prototype을 상속받는다. Obejctprototype을 프로토토타입 체인의 종점이라고 한다.
	Object.prototype의 프로토타입 즉 [[Prototype]] 내부 슬롯의 값은 null이다.

	* 프로토타입 체인의 종점인 Object.prototype에서도 프로퍼티를 검색할 수 겂는 경우 undefined를 반환한다. >> 이때 에러는 발생하지 않는다.

	JS 엔진은 프로토타입 체인을 따라 프로퍼티/메소드를 검색한다. 다시 말하면, JS 엔진은 객체 간의 상속 관계로 이루어진 프로토타입의 계층적인 구조에서 객체의 프로퍼티를 검색한다.
	따라서 프로토타입체인은 상속과 프로퍼티 검색을 위한 메커니즘이라고 할 수 있다.


	반대로 프로퍼티가 아닌 식별자는 스코프 체인에서 검색한다. 즉, JS엔진은 함수의 중첩 과녜로 이루어진 스코프의 계층적 구조에서 식별자를 검색한다.
	따라서 스코프 체인은 식별자 검색을 위한 메커니즘이라고 할 수 있다.


	ex)
	me.hasOwnProperty('name)

	위의 예제는 스코프 체인에서 me 식별자를 검색한다. me 식별자는 전역에서 선언되었으므로 전역 스코프에서 검색된다. 
	me 식별자를 검색한 다음, me객체의 프로토타입 체인에서 ahsOwnProperty 메소드를 검색한다. 

	이처럼 스코프 체인과 프로토타입 체인은 서로 연관없이 동작하는 것이 아니라 서로 협력하여 식별자와 프로퍼티를 검색하는데 사용된다. 
*/