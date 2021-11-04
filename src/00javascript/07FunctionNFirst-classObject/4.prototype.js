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