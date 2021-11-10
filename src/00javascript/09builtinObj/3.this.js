//This

/**
 * 객체는 상태를 나타내는 프로퍼티와 동작을 나타내는 메소드를 하나의 논리적으로 묶은 복합적인 자료구조이다.
 * 동작을 나타내는 메소드는 자신이 속한 객체의 상태, 즉 프로퍼티를 참조하고 변경할 수 있어야한다. 
 * 이때 메소드가 자신이 속한 객체의 프로퍼티를 참조하려면 먼저 자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야한다.
 */
const circle = {
	//프로퍼티 : 객체 고유의 상태 데이터
	radius : 5,
	
	//메소드 :  상태 덷이터를 참조하고 조작하는 동작
	getDiameter(){
		// 이 메서드가 자신이 속한 객체의 프로퍼티나 다른 메소드를 참조하려면
		// 자신이 속한 객체인 circle을 참조할 수 있어야한다. 
		
		return 2*circle.radius;
		//자신이 속한 객체를 가리키는 식별자 circle을 참조하고 있다. 
		//getDiameter 메소드가 호출되는 시점에는 이미 객체 리터럴의 평가가 완료되어 객체가 생성되었고
		//circle 식별자에 생성된 객체가 할당된 이후이다.
		//따라서 메소드 내부에서 circle식별자를 참조할 수 있다. 
	}
};

console.log(circle.getDiameter()); //10

/**
 * 	function Circle(radius){
 * 		//이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
 * 		???.radius = radius;
 * 	}
 * 
 * 	Circle.prototype.getDiameter = function(){
 * 		//이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
 * 		return 2 * ???.radius;
 * 	}
 * 
 * 	//생성자 함수로 인스턴스를 생성하려면 먼저 생성자 함수를 정의해야 한다.
 * 	const circle = new Circle(5);
 * 
 * 
 * 	생성자 함수 내부에서는 프로퍼티 또는 메소드를 추가하기 위해 자신이 생성할 인스턴스를 참조할 수 있어야 한다.
 * 생성자 함수에 의한 객체 생성 방식은 먼저 생성자 함수를 정의한 이후 new 연산자와 함께 생성자 함수를 호출하는 단계가 추가로 필요하다. >> 인스턴스를 생성하려면 먼저 생성자 함수가 존재해야한다. 
 * 
 * 
 * 생성자 함수를 정의하는 시점에는 아직 인스턴스를 생성하기 이전이다. 따라서 생성자 함수가 생성할 인스턴스를 가리키는 특수한 실별자가 필요하다. 이를 위해 JS는 this를 제공한다. 
 * 
 * 
 * 
 * 
 * ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 * 
 * this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수이다. this를 통해 자신이 속한 객체 또는 생성할 인스턴스의 프로퍼티나 메소드를 참조할 수 있다. 
 * 
 * this는 JS엔진에 의해 암묵적으로 생성되며, 코드 어디서든 참조할 수 있다. 
 * 
 * 함수를 호출하면 arguments 객체와 this가 암묵적으로 함수 내부에 전달된다. 함수 내부에서 arguments객체를 지역 변수처럼 사용할 수 있는 것처럼 this도 지역 변수처럼 사용할 수 있다...
 * 
 * 단, this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다. 
 */

	// THIS 바인딩
	//바인딩이란 식별자와 값을 연결하는 과정을 의미한다. 예를 들어 변수 선언은 변수 이름(식별자)과 학보된 메모리 공간의 주소를 바인딩하는 것이다.
	//this 바인딩은 this(키워드로 분류되지만 식별자 역할을 한다.)와 this가 가리킬 객체를 바인딩하는 것이다.

const circle2 = {
	radius:5,
	getDiameter(){
		//this는 메소드를 호출한 객체를 가리킨다.
		return 2 * this.radius;
	}
};

console.log(circle.getDiameter()); //10

//생성자 함수 
function Circle3(radius){
	//this는 생성자 함수가 생성할 인스턴스를 가리킨다.
	this.radius = radius;
}

Circle3.prototype.getDiameter = function (){
	//this는 생성자 함수가 생성할 인스턴스를 가리킨다.
	return 2 * this.radius;
}

//인스턴스 생성
const cir = new Circle3(5);
console.log(cir.getDiameter()); //10


//생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.>> this는 상황에 따라 가리키는 대상이 다르다. 


/**
 * 자바나 C++등의 클래스 기반 언어에서 this는 클래스가 생성하는 인스턴스를 가리킨다.
 * 
 * JS this는 함수가 호출되는 방식에 따라 this에 바인딩될 값이 동적으로 결정된다. ++ strict mode도 this 바인딩에 영향을 준다. 
 */

//this는 어디에서든지 참조가 가능하다.
//전역에서 this는 전역 객체 window를 가리킨다.
console.log(this); //Window {Infinity: Infinity, window: Window, NaN: NaN, undefined: undefined, document: #document, …}

function square(number){
	// 일반 함수 내부에서 this는 전역 객체 window를 가리킨다.
	console.log(this)//window
	return number*number;

}
square(2)




const person = {
	name:'lee',
	getName(){
		//메소드 내부에서 this는 메소드를 호출한 객체를 가리킨다.
		console.log(this); // {name: 'lee', getName: f}
		return this.name;
	}
}

console.log(person.getName()); //lee

function Persons(name){
	this.name = name;
	//생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
	console.log(this); // Person{name:"lee"}

}
const me = new Persons('lee');





//>> 함수 호출 방식과 this 바인딩
//this 바인딩(this에 바인딩 될 값)은 함수 호춣 방식, 즉 함수가 어떻게 호출되었는지에 따라 동적으로 결정된다.